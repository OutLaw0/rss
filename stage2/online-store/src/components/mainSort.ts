import { SortKey } from '../types/catalogTypes';
import render from '../utils/render';

type OnSelect = (key: SortKey) => void;

class MainSort {
  func: OnSelect;

  title_obj: { [key: string]: string };

  constructor(func: OnSelect) {
    this.func = func;
    this.title_obj = {
      az: 'Name: from A to Z',
      za: 'Name: from Z to A',
      low: 'Price: Low to High',
      high: 'Price: High to Low',
    };
  }

  render(initial: SortKey[], settings: SortKey) {
    const listWrapper = <HTMLElement>document.querySelector('.sort_main-list');
    const listTitle = <HTMLElement>document.querySelector('.sort_main-title');

    const fragment = new DocumentFragment();
    initial.forEach((i) => {
      const elem = render(
        'li',
        'relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-500 hover:text-gray-900',
        null,
        null,
        ['href', '##'],
        ['data-main_sort', i],
      );
      render(
        'div',
        'flex items-center',
        render('span', 'ml-0 block truncate font-normal', this.title_obj[i]),
        elem,
      );
      const groupSvg = `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
       </svg>`;
      const svgContainer = render(
        'span',
        'absolute inset-y-0 right-0 flex items-center pr-4 text-white',
        groupSvg,
        elem,
      );

      elem.addEventListener('click', (e: Event) => {
        this.handler(e);
      });

      if (settings === i) {
        elem.classList.add('text-gray-900');
        elem.classList.remove('text-gray-500');
        svgContainer.classList.add('text-indigo-600');
        (<HTMLElement>listTitle.lastElementChild).textContent = this.title_obj[
          i
        ];
      }
      fragment.appendChild(elem);
    });
    listWrapper.innerHTML = '';
    listWrapper.append(fragment);
  }

  handler(e: Event) {
    const { func } = this;
    const listWrapper = <HTMLElement>document.querySelector('.sort_main-list');
    const list = document.querySelectorAll('[data-main_sort]');
    const listTitle = <HTMLElement>document.querySelector('.sort_main-title');

    if (!(<HTMLElement>e.target).classList.contains('text-gray-900')) {
      [...list].forEach((elem) => {
        (<HTMLElement>elem).classList.remove('text-gray-900');
        (<HTMLElement>elem).classList.add('text-gray-500');
        (<HTMLElement>(<HTMLElement>elem).lastElementChild).classList.remove(
          'text-indigo-600',
        );
      });
      (<HTMLElement>e.currentTarget).classList.remove('text-gray-500');
      (<HTMLElement>e.currentTarget).classList.add('text-gray-900');

      (<HTMLElement>(
        (<HTMLElement>e.currentTarget).lastElementChild
      )).classList.add('text-indigo-600');
      const key: SortKey = (e.currentTarget as HTMLElement).dataset
        .main_sort as SortKey;

      (<HTMLElement>listTitle.lastElementChild).textContent = this.title_obj[
        key
      ];
      listWrapper.classList.toggle('hidden');

      func(key);
    }
  }
}

export default MainSort;
