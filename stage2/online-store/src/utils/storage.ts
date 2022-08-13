import { Item, CartItems, ItemCategory2 } from '../types/item';
import { LocalStorage } from '../types/common';
import { filterItemsPage } from './sorting';
import { CatalogSettings, InitCatalogSettings } from '../types/catalogTypes';
import '../assets/dataStatic.json';
import '../assets/Settings.json';
import '../assets/initSettings.json';

const addLocalKey = (key: string) => `dms-${key}`;

const loadData = async <T>(url: string): Promise<T> => fetch(url).then((response): Promise<T> => response.json());

const setData = <T>(key: LocalStorage, value: T) => {
  const stringData = JSON.stringify(value);
  window.localStorage.setItem(addLocalKey(key), stringData);
};

const removeData = (key: string) => {
  window.localStorage.removeItem(addLocalKey(key));
};

const getData = async (key?: LocalStorage, page?: string) => {
  const localItems = window.localStorage.getItem(addLocalKey(key as string));
  if (localItems) {
    return JSON.parse(localItems) as CatalogSettings | CartItems;
  }

  if (key === LocalStorage.Settings) {
    const settings = await loadData<CatalogSettings>('./assets/settings.json');
    return settings;
  }
  if (key === LocalStorage.InitSettings) {
    const initSettings = await loadData<InitCatalogSettings>(`./assets/initSettings${page as string}.json`);

    return initSettings;
  }
  if (key === LocalStorage.DefaultSettings) {
    const defaultSettings = await loadData<CatalogSettings>('./assets/settings.json');
    return defaultSettings;
  }

  if (key === LocalStorage.InCartItems) {
    return {};
  }

  let initialItems = await loadData<Item[]>('./assets/dataStatic.json');
  if (page) {
    initialItems = filterItemsPage(initialItems, page as ItemCategory2);
  }
  return initialItems;
};

export { setData, getData, removeData, loadData, addLocalKey };
