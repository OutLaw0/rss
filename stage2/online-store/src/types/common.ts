enum LocalStorage {
  OriginalItems = 'originalItems',
  InCartItems = 'inCartItems',
  DefaultSettings = 'defaultSettings',
  Settings = 'Settings',
  InitSettings = 'initSettings',
}

interface PaginationProps {
  onChange: (pageNum: number) => void;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

export { LocalStorage, PaginationProps };
