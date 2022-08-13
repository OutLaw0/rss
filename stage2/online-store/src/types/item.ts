interface ItemObject {
  [key: string]: string | undefined;
}

enum ItemColor {
  Black = 'Black',
  Blue = 'Blue',
  Brown = 'Brown',
  Gray = 'Gray',
  Green = 'Green',
  Lavender = 'Lavender',
  Orange = 'Orange',
  Purple = 'Purple',
  Red = 'Red',
  Yellow = 'Yellow',
}

enum ItemSize {
  Large = 'L',
  Medium = 'M',
  Small = 'S',
}
enum ItemCategory2 {
  Men = 'Men',
  Woman = 'Woman',
}
enum ItemCategory4 {
  Hoodies = 'Hoodies & Sweatshirts',
  Jackets = 'Jackets',
  Tees = 'Tees',
  Tanks = 'Tanks',
  Bras = 'Bras & Tanks',
}

interface Item extends ItemObject {
  id: string;
  name: string;
  isFeatured: string;
  inStock: string;
  stock: string;
  price: string;
  cat_1?: 'Clothing';
  cat_2: ItemCategory2;
  cat_3?: string;
  cat_4: ItemCategory4;
  collections?: string;
  image_1: string;
  size: ItemSize;
  color: ItemColor;
}

type CartItems = {
  [key: string]: 'id';
};

export type {
  Item,
  ItemColor,
  ItemSize,
  ItemCategory2,
  ItemCategory4,
  CartItems,
};
