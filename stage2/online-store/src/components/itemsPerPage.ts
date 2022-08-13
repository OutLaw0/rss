import { ItemsPerPageKey } from '../types/catalogTypes';
import render from '../utils/render';

type OnSelect = (key: ItemsPerPageKey) => void;

class ItemsPerPage {
  func: OnSelect;

  constructor(func: OnSelect) {
    this.func = func;
  }

  render(initial: ItemsPerPageKey[], settings: ItemsPerPageKey) {
    const container = document.querySelector('.itemonpage_wrapper');
    const fragment = new DocumentFragment();
    initial.forEach((i) => {
      const elem = render(
        'a',
        'block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100',
        `${i}`,
        null,
        ['href', '##'],
        ['data-itemPerPage', i],
      );
      elem.addEventListener('click', (e: Event) => {
        this.handler(e);
      });
      if (settings === i) {
        elem.classList.add('font-medium', 'text-gray-900');
        elem.classList.remove('text-gray-500');
      }
      fragment.appendChild(elem);
    });
    (<HTMLElement>container).innerHTML = '';
    (<HTMLElement>container).append(fragment);
  }

  handler(e: Event) {
    const { func } = this;
    const listWrapper = <HTMLElement>document.querySelector('.sort_itemonpage div');
    const list = document.querySelectorAll('[data-item-per-page]');

    e.preventDefault();
    if (!(<HTMLElement>e.target).classList.contains('text-gray-900')) {
      [...list].forEach((elem) => (<HTMLElement>elem).classList.remove('text-gray-900', 'font-medium'));
      (<HTMLElement>e.target).classList.add('font-medium', 'text-gray-900');
      (<HTMLElement>e.target).classList.remove('text-gray-500');
      listWrapper.classList.toggle('hidden');
      const key = +(<string>(<HTMLElement>e.target).dataset.itemPerPage) as ItemsPerPageKey;
      func(key);
    }
  }
}

export default ItemsPerPage;
