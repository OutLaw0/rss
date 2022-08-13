import { PaginationProps } from '../types/common';
import render from '../utils/render';

class RenderPagination {
  props: PaginationProps;

  constructor(props: PaginationProps) {
    this.props = props;
  }

  render() {
    const { totalItems, itemsPerPage, currentPage } = this.props;
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const container = document.querySelector('.pagination');
    const pageStart = currentPage === 0 ? 0 : currentPage * itemsPerPage;
    const pageArray = Array.from(Array(pageCount).keys());

    const pagination = `
 
 <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"> 
 <div class="text-sm text-gray-700 pr-10">
    Showing
    <span class="pageStart font-medium">${pageStart + 1}</span>
    to
    <span class="pageEnd font-medium">${Math.min(
    pageStart + itemsPerPage,
    totalItems,
  )}</span>
    of
    <span class="totalItems font-medium">${totalItems}</span>
    results
  </div>
   <nav class="relative z-0 inline-flex flex-wrap justify-center -space-x-px rounded-md shadow-sm" aria-label="Pagination">
   <a href="#" class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
     <span class="previous sr-only">Previous</span>
     <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
       <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
     </svg>
   </a>
   <a href="#" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
     <span class="next sr-only">Next</span>
     <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
       <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
     </svg>
   </a>
   </nav>
 </div>
`;
    const fragment = new DocumentFragment();
    pageArray.forEach((a) => {
      const elem = render(
        'a',
        'relative inline-flex items-center border cursor-pointer px-4 py-2 text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
        `${a + 1}`,
        null,
        ['data-page', `${`${a + 1}`}`],
      );
      elem.addEventListener('click', (e: Event) => {
        this.paginationHandler(e);
      });
      fragment.appendChild(elem);
    });
    (<HTMLElement>fragment.firstElementChild).classList.add(
      'z-10',
      'bg-indigo-50',
      'border-indigo-500',
      'text-indigo-600',
    );
    (<HTMLElement>container).innerHTML = pagination;

    const containerNav = document.querySelector('.pagination nav');

    (<HTMLElement>(<HTMLElement>containerNav).firstElementChild).after(
      fragment,
    ); // ???

    (<HTMLElement>(
      (<HTMLElement>containerNav).firstElementChild
    )).addEventListener('click', (e: Event) => {
      this.prevPaginationHandler(e);
    });

    (<HTMLElement>(
      (<HTMLElement>containerNav).lastElementChild
    )).addEventListener('click', (e: Event) => {
      this.nextPaginationHandler(e);
    });
  }

  paginationHandler(e: Event) {
    e.preventDefault();
    const { onChange, currentPage } = this.props;
    const containerNav = document.querySelector('.pagination nav');

    if (+((<HTMLElement>e.target).textContent as string) - 1 !== currentPage) {
      [...(<HTMLElement>containerNav).children].forEach((elem) => {
        (<HTMLElement>elem).classList.remove(
          'z-10',
          'bg-indigo-50',
          'border-indigo-500',
          'text-indigo-600',
        );
      });
      (<HTMLElement>e.target).classList.add(
        'z-10',
        'bg-indigo-50',
        'border-indigo-500',
        'text-indigo-600',
      );

      this.props.currentPage = +((<HTMLElement>e.target).textContent as string) - 1;
    }

    onChange(this.props.currentPage);
    this.renderCountBlock();
  }

  nextPaginationHandler(e: Event) {
    e.preventDefault();
    const {
      onChange, totalItems, itemsPerPage, currentPage,
    } = this.props;
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    if (currentPage + 1 < pageCount) {
      this.props.currentPage = currentPage + 1;
      const container = document.querySelectorAll('[data-page]');
      [...container].forEach((elem) => {
        (<HTMLElement>elem).classList.remove(
          'z-10',
          'bg-indigo-50',
          'border-indigo-500',
          'text-indigo-600',
        );
      });

      const nextElem = document.querySelector(
        `[data-page="${currentPage + 2}"]`,
      );
      (<HTMLElement>nextElem).classList.add(
        'z-10',
        'bg-indigo-50',
        'border-indigo-500',
        'text-indigo-600',
      );
      onChange(this.props.currentPage);
      this.renderCountBlock();
    }
  }

  prevPaginationHandler(e: Event) {
    e.preventDefault();
    const { onChange, currentPage } = this.props;

    if (currentPage > 0) {
      this.props.currentPage = currentPage - 1;
      const container = document.querySelectorAll('[data-page]');
      [...container].forEach((elem) => {
        (<HTMLElement>elem).classList.remove(
          'z-10',
          'bg-indigo-50',
          'border-indigo-500',
          'text-indigo-600',
        );
      });
      console.log(currentPage);
      const prevElem = document.querySelector(`[data-page="${currentPage}"]`);
      (<HTMLElement>prevElem).classList.add(
        'z-10',
        'bg-indigo-50',
        'border-indigo-500',
        'text-indigo-600',
      );
      onChange(this.props.currentPage);
      this.renderCountBlock();
    }
  }

  renderCountBlock() {
    const { totalItems, itemsPerPage, currentPage } = this.props;
    const pageStart = currentPage === 0 ? 0 : currentPage * itemsPerPage;
    (<string>(
      (<HTMLElement>document.querySelector('.pageStart')).textContent
    )) = `${pageStart + 1}`;
    (<string>(
      (<HTMLElement>document.querySelector('.pageEnd')).textContent
    )) = `${Math.min(pageStart + itemsPerPage, totalItems)}`;
    (<string>(
      (<HTMLElement>document.querySelector('.totalItems')).textContent
    )) = `${totalItems}`;
  }
}

export default RenderPagination;
