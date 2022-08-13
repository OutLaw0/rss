import render from '../utils/render';
import { Item, CartItems } from '../types/item';

type OnSelect = (id: string) => void;

const addToCart = (e: Event, func: OnSelect) => {
  e.preventDefault();

  const target = <HTMLElement>(
    (<HTMLElement>(<HTMLElement>e.currentTarget).lastChild).lastChild
  );
  target.classList.toggle('text-gray-700');
  target.classList.toggle('text-pink-700');
  const id = (<HTMLElement>e.currentTarget).dataset.id as string;
  func(id);
};

const renderProduct = (item: Item, inCartItems: CartItems, func: OnSelect) => {
  const elem = render(
    'a',
    'group relative fade-start',
    null,
    null,
    ['href', '##'],
    ['data-id', item.id],
  );
  render(
    'div',
    'group_img aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200',
    render(
      'img',
      'h-full w-full object-cover object-center group-hover:opacity-75',
      null,
      null,
      ['src', `./assets/images/${item.image_1}`],
    ),
    elem,
  );

  render('h3', 'mt-4 text-m text-gray-700', item.name, elem);
  render('p', 'mt-1 text-sm text-gray-500', item.cat_4, elem);
  render(
    'ul',
    'absolute bottom-1/2 text-center left-0 right-0 ml-auto mr-auto w-11/12 p-2 opacity-0 hover:opacity-100 rounded-sm w-full bg-white group__info grid grid-cols-2 mt-1 text-xs text-gray-600',
    [
      render(
        'li',
        'info',
        `stock: <span class="info__value">${item.stock}</span>`,
      ),
      render(
        'li',
        'info',
        `color: <span class="info__value">${item.color}</span>`,
      ),
      render(
        'li',
        'info',
        `size: <span class="info__value">${item.size}</span>`,
      ),
      render(
        'li',
        'info',
        `featured: <span class="info__value">${item.isFeatured}</span>`,
      ),
    ],
    elem,
  );

  const groupSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
  </svg>`;
  const heart = render(
    'button',
    'add-to-cart mt-1 inline-flex aling-center text-gray-700 hover:text-pink-700',
    groupSvg,
    null,
    ['type', 'button'],
    ['id', 'menu-button'],
    ['aria-expanded', false],
    ['aria-haspopup', true],
  );

  if (Object.prototype.hasOwnProperty.call(inCartItems, item.id)) {
    heart.classList.add('text-pink-700');
  } else {
    heart.classList.add('text-gray-700');
  }

  render(
    'div',
    'flex justify-between',
    [
      render('p', 'mt-1 text-lg font-medium text-gray-900', `$${item.price}`),
      heart,
    ],
    elem,
  );

  elem.addEventListener('click', (e) => addToCart(e, func));
  setTimeout(() => {
    elem.classList.remove('fade-start');
  }, 500);
  return elem;
};

export default renderProduct;
