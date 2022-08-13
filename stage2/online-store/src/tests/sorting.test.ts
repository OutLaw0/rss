import { searchItems, sortItems, filterItems } from '../utils/sorting';
import { addLocalKey } from '../utils/storage';
import { Item } from '../types/item';
import { SortKey, CatalogFilters } from '../types/catalogTypes';
import testObjBase from './dataTest';

type TestObject = {
  item: Item[];
  itemFilter: Item[];
  filter: CatalogFilters;
  filterSize: CatalogFilters;
  filterColor: CatalogFilters;
};

const testObj: TestObject = JSON.parse(
  JSON.stringify(testObjBase),
) as TestObject;

test('sorting func return array of objects', () => {
  expect(sortItems(testObj.item, SortKey.Az)[3]).toMatchObject({
    name: 'Teton Pullover Hoodie-S-Black',
  });
});

test('sorting func working with names AZ', () => {
  expect(sortItems(testObj.item, SortKey.Az)).toEqual(testObj.itemFilter);
});

test('search func returned array', () => {
  expect(searchItems(testObj.item, '')).toBeInstanceOf(Array);
});

test('search func working fine', () => {
  expect(searchItems(testObj.item, 'Black')).toHaveLength(3);
});

test('add key func works', () => {
  expect(addLocalKey('Settings')).toBe('dms-Settings');
});

test('test filter func', () => {
  expect(filterItems(testObj.itemFilter, testObj.filter)).toBeTruthy();
});

test('filter func instock testing', () => {
  expect(
    +filterItems(testObj.itemFilter, testObj.filter)[0].stock,
  ).toBeGreaterThan(0);
});

test('filter func instock count elements testing ', () => {
  expect(filterItems(testObj.itemFilter, testObj.filter).length).toBeLessThan(
    3,
  );
});

test('filter func size testing ', () => {
  expect(
    filterItems(testObj.itemFilter, testObj.filterSize).length,
  ).toBeGreaterThanOrEqual(1);
});

test('filter func color testing ', () => {
  expect(
    filterItems(testObj.itemFilter, testObj.filterColor).length,
  ).toBeFalsy();
});
