import {
  CatalogSettings,
  InitCatalogSettings,
  CatalogFilters,
  CatalogFiltersValues,
  SortKey,
  ItemsPerPageKey,
  TypesOptions,
} from '../types/catalogTypes';
import renderProduct from '../layout/product';
import RenderPagination from '../layout/pagination';
import searchHandler from '../components/search';
import ItemsPerPage from '../components/itemsPerPage';
import MainSort from '../components/mainSort';
import Slider from '../components/slider';
import singleCheckbox from '../components/singleCheckbox';
import ColorFilter from '../components/colorFilter';
import CheckboxFilter from '../components/checkboxFilter';
import { setData, getData, removeData } from '../utils/storage';
import { searchItems, sortItems, filterItems } from '../utils/sorting';
import { Item, CartItems } from '../types/item';
import { LocalStorage } from '../types/common';
import addDropdown from '../utils/utils';
import render from '../utils/render';

interface CatalogSetup {
  settings: CatalogSettings;
  defaultSettings: CatalogSettings;
  initSettings: InitCatalogSettings;
  originalItems: Item[];
  sortedItems: Item[];
  inCartItems: CartItems;
  inCart: number;
  currentPage: number;
  paginationClick: boolean;
  search: string;
  page?: string;
  loaded: boolean;
}

class Catalog {
  setup: CatalogSetup;

  constructor() {
    this.setup = {
      settings: {} as CatalogSettings,
      defaultSettings: {} as CatalogSettings,
      initSettings: {} as InitCatalogSettings,
      originalItems: [],
      sortedItems: [],
      inCartItems: {},
      inCart: 0,
      currentPage: 0,
      search: '',
      paginationClick: false,
      page: '',
      loaded: false,
    };
  }

  async mount() {
    this.setup.originalItems = (await getData(LocalStorage.OriginalItems, this.setup.page)) as Item[];
    this.setup.inCartItems = (await getData(LocalStorage.InCartItems)) as CartItems;
    this.setup.settings = (await getData(LocalStorage.Settings)) as CatalogSettings;
    this.setup.initSettings = (await getData(LocalStorage.InitSettings, this.setup.page)) as InitCatalogSettings;
    this.setup.defaultSettings = (await getData(LocalStorage.DefaultSettings)) as CatalogSettings;

    searchHandler((value: string) => this.search(value));

    this.mountComponents();

    if (!this.setup.loaded) {
      addDropdown(this.setup.settings.filters);
      this.setup.loaded = true;
    }

    (<HTMLButtonElement>document.querySelector('.button-reset')).addEventListener('click', () => this.reset());
    (<HTMLButtonElement>document.querySelector('.button-clear')).addEventListener('click', () => this.clear());

    window.addEventListener('beforeunload', () => {
      this.setLocalData();
    });
  }

  setLocalData() {
    if (this.setup.loaded) {
      const { settings, inCartItems } = this.setup;
      setData<CatalogSettings>(LocalStorage.Settings, settings);
      setData<CartItems>(LocalStorage.InCartItems, inCartItems);
    }
  }

  mountComponents() {
    this.setup.inCart = Object.keys(this.setup.inCartItems).length;

    const { settings, initSettings, inCart } = this.setup;
    (<HTMLButtonElement>document.querySelector('.cart_count')).textContent = `${inCart}`;

    new ItemsPerPage((key: ItemsPerPageKey) => this.changeItemPerPage(key)).render(
      initSettings.itemsPerPage,
      settings.itemsPerPage
    );

    new MainSort((key: SortKey) => this.sortHandler(key)).render(initSettings.sort, settings.sort);

    new Slider(TypesOptions.Price).render(
      initSettings.filters.price,
      settings.filters.price,
      TypesOptions.Price,
      (type: string, options: CatalogFiltersValues) => this.handleFilter(type, options)
    );

    new Slider(TypesOptions.Price).render(
      initSettings.filters.stock,
      settings.filters.stock,
      TypesOptions.Stock,
      (type: string, options: CatalogFiltersValues) => this.handleFilter(type, options)
    );

    new ColorFilter({
      initSettings: initSettings.filters.color,
      settings: settings.filters.color,
      type: TypesOptions.Color,
      func: (type: string, options: CatalogFiltersValues) => this.handleFilter(type, options),
    }).render();

    new CheckboxFilter({
      initSettings: initSettings.filters.cat_4,
      settings: settings.filters.cat_4,
      type: TypesOptions.Category4,
      func: (type: string, options: CatalogFiltersValues) => this.handleFilter(type, options),
    }).render();

    new CheckboxFilter({
      initSettings: initSettings.filters.size,
      settings: settings.filters.size,
      type: TypesOptions.Size,
      func: (type: string, options: CatalogFiltersValues) => this.handleFilter(type, options),
    }).render();

    singleCheckbox(
      settings.filters.featured,
      TypesOptions.onlyFeatured,
      (type: string, options: CatalogFiltersValues) => this.handleFilter(type, options)
    );

    singleCheckbox(settings.filters.in_stock, TypesOptions.onlyInStock, (type: string, options: CatalogFiltersValues) =>
      this.handleFilter(type, options)
    );

    this.filter();
  }

  renderProducts() {
    const container = document.querySelector('.product-wrapper ');
    const { sortedItems, inCartItems, settings, search, currentPage, paginationClick } = this.setup;
    const { itemsPerPage } = settings;
    const pageStart = currentPage === 0 ? 0 : currentPage * itemsPerPage;

    const fragment = new DocumentFragment();

    while ((<HTMLElement>container).firstChild) {
      (<HTMLElement>container).removeChild((<HTMLElement>container).firstChild as HTMLElement);
    }

    const resultArray = searchItems(sortedItems, search);

    if (resultArray.length > 0) {
      resultArray.slice(pageStart, pageStart + itemsPerPage).forEach((item: Item): void => {
        fragment.appendChild(renderProduct(item, inCartItems, (id: string) => this.cartHandler(id)));
      });
    } else {
      fragment.appendChild(
        render('div', 'text-2xl tracking-tight col-span-4 p-4 align-center text-gray-900', 'Sorry, no matches found')
      );
    }

    (<HTMLElement>container).append(fragment);

    if (!paginationClick) {
      new RenderPagination({
        onChange: (pageNum) => this.pageChange(pageNum),
        totalItems: sortedItems.length,
        itemsPerPage,
        currentPage,
      }).render();
    } else {
      this.setup.paginationClick = false;
    }
  }

  reset() {
    const { filters } = this.setup.defaultSettings;
    this.setup.settings.filters = JSON.parse(JSON.stringify(filters)) as CatalogFilters;
    this.mountComponents();
  }

  clear() {
    removeData(LocalStorage.Settings);
    removeData(LocalStorage.InCartItems);

    const { defaultSettings, originalItems } = this.setup;
    this.setup.settings = JSON.parse(JSON.stringify(defaultSettings)) as CatalogSettings;

    this.setup.inCartItems = {};
    (<HTMLInputElement>document.querySelector('.filter__search')).value = '';
    this.setup.currentPage = 0;
    this.setup.search = '';
    this.setup.sortedItems = originalItems;

    this.mountComponents();
  }

  cartHandler(id: string) {
    const { inCartItems } = this.setup;
    let { inCart } = this.setup;

    const cartDisplay = <HTMLElement>document.querySelector('.cart_count');
    if (Object.prototype.hasOwnProperty.call(inCartItems, id)) {
      delete inCartItems[id];
      inCart -= 1;
      cartDisplay.textContent = `${inCart}`;
      this.setup.inCart = inCart;
    } else if (inCart > 19) {
      const modalList = document.querySelectorAll('[aria-labelledby="modal-message"]');
      [...modalList].forEach((m) => m.classList.toggle('hidden'));
      const targetHeart = document.querySelector(`[data-id="${id}"]`)?.lastElementChild?.lastElementChild;
      targetHeart?.classList.remove('text-pink-700');
      targetHeart?.classList.add('text-gray-700');
    } else {
      inCartItems[id] = 'id';
      inCart += 1;
      cartDisplay.textContent = `${inCart}`;
      this.setup.inCart = inCart;
    }
  }

  search(value: string) {
    this.setup.search = value;
    this.renderProducts();
  }

  pageChange(pageNum: number) {
    this.setup.currentPage = pageNum;
    this.setup.paginationClick = true;
    this.renderProducts();
  }

  changeItemPerPage(key: ItemsPerPageKey) {
    this.setup.settings.itemsPerPage = key;
    this.setup.currentPage = 0;
    this.renderProducts();
  }

  sortHandler(key: SortKey) {
    const { sortedItems, settings } = this.setup;
    settings.sort = key;
    this.sort(sortedItems, settings);
  }

  handleFilter(type: string, options: CatalogFiltersValues) {
    const { settings } = this.setup;
    settings.filters[type] = options;
    this.filter();
  }

  sort(items: Item[], settings: CatalogSettings) {
    const { sort } = settings;
    const sorted = sortItems(items, sort);
    this.setup.sortedItems = sorted;
    this.renderProducts();
  }

  filter() {
    const { originalItems, settings } = this.setup;
    const { filters } = settings;
    const filtered = filterItems(originalItems, filters);
    this.sort(filtered, settings);
  }
}

export default Catalog;