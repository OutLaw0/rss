import {
  ItemColor, ItemSize, ItemCategory2, ItemCategory4,
} from './item';

enum SortKey {
  Az = 'az',
  Za = 'za',
  Low = 'low',
  High = 'high',
}

interface RangeOptions {
  min: string | number;
  max: string | number;
}

interface RangeOptionsBase {
  min?: string | number;
  max?: string | number;
}

enum TypesOptions {
  Category4 = 'cat_4',
  Category2 = 'cat_2',
  Price = 'price',
  Stock = 'stock',
  Color = 'color',
  Size = 'size',
  onlyFeatured = 'featured',
  onlyInStock = 'in_stock',
}

type ItemsPerPageKey = 20 | 40 | 60;

type MultiOptions = ItemCategory4 | ItemCategory2 | ItemColor | ItemSize;
type CatalogFiltersValues = RangeOptionsBase | MultiOptions[] | boolean;
type CatalogSettingsValues =
  | CatalogFilters
  | SortKey
  | ItemsPerPageKey
  | SortKey[]
  | ItemsPerPageKey[];

interface CatalogSettingsObject {
  [key: string]: CatalogSettingsValues;
}

interface CatalogFiltersObject {
  [key: string]: CatalogFiltersValues;
}

interface CatalogFilters extends CatalogFiltersObject {
  price: RangeOptions;
  stock: RangeOptions;
  cat_4: ItemCategory4[];
  color: ItemColor[];
  size: ItemSize[];
  in_stock: boolean;
  featured: boolean;
}

interface CatalogSettings extends CatalogSettingsObject {
  filters: CatalogFilters;
  sort: SortKey;
  itemsPerPage: ItemsPerPageKey;
}

interface InitCatalogSettings extends CatalogSettingsObject {
  filters: CatalogFilters;
  sort: SortKey[];
  itemsPerPage: ItemsPerPageKey[];
}

export {
  CatalogSettings,
  InitCatalogSettings,
  CatalogFilters,
  SortKey,
  ItemsPerPageKey,
  CatalogFiltersValues,
  RangeOptions,
  MultiOptions,
  TypesOptions,
  RangeOptionsBase,
};
