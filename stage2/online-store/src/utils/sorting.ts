import { Item, ItemCategory2 } from '../types/item';
import { SortKey, CatalogFilters } from '../types/catalogTypes';

const searchItems = (array: Item[], key: string) =>
  array.filter((item) => {
    if (key === '') {
      return item;
    }
    return item.name.toLowerCase().includes(key.toLowerCase());
  });

const sortItems = (items: Item[], key: SortKey) => {
  if (key === SortKey.Az) {
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (key === SortKey.Za) {
    return items.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (key === SortKey.Low) {
    return items.sort((a, b) => +a.price - +b.price);
  }
  if (key === SortKey.High) {
    return items.sort((a, b) => +b.price - +a.price);
  }

  return items;
};

const filterItems = (items: Item[], filters: CatalogFilters) => {
  const checkPrice = (item: Item) =>
    filters.price.min ? +item.price >= filters.price.min && +item.price <= filters.price.max : true;
  const checkStock = (item: Item) =>
    filters.stock.min ? +item.stock >= filters.stock.min && +item.stock <= filters.stock.max : true;
  const checkCategory = (item: Item) => (filters.cat_4.length ? filters.cat_4.includes(item.cat_4) : true);
  const checkColor = (item: Item) => (filters.color.length ? filters.color.includes(item.color) : true);
  const checkSize = (item: Item) => (filters.size.length ? filters.size.includes(item.size) : true);
  const checkFeatured = (item: Item) => (filters.featured ? item.IsFeatured === '1' : true);
  const checkAvailable = (item: Item) => (filters.in_stock ? item.inStock === '1' : true);

  return items.filter(
    (item) =>
      checkPrice(item) &&
      checkStock(item) &&
      checkCategory(item) &&
      checkColor(item) &&
      checkSize(item) &&
      checkFeatured(item) &&
      checkAvailable(item)
  );
};

const filterItemsPage = (items: Item[], page: ItemCategory2) => {
  const checkCategory2 = (item: Item) => page === item.cat_2;
  return items.filter((item) => checkCategory2(item));
};

export { searchItems, sortItems, filterItems, filterItemsPage };
