type OnSearch = (value: string) => void;

const searchHandler = (func: OnSearch) => {
  const search = <HTMLElement>document.querySelector('.filter__search');
  search.addEventListener('input', (e) => {
    const { value } = e.target as HTMLInputElement;
    func(value);
  });
};

export default searchHandler;
