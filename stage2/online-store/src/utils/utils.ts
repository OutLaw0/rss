import { CatalogFilters } from '../types/catalogTypes';

const dropDownItemPerPage = () => {
  const button = <HTMLElement>document.querySelector('.sort_itemonpage button');
  const listWrapper = <HTMLElement>(
    document.querySelector('.sort_itemonpage div')
  );
  button.addEventListener('click', () => listWrapper.classList.toggle('hidden'));
};

const dropDownMainSort = () => {
  const button = <HTMLElement>document.querySelector('.sort_main button');
  const listWrapper = <HTMLElement>document.querySelector('.sort_main-list');
  button.addEventListener('click', () => listWrapper.classList.toggle('hidden'));
};

const dropDownFilters = (filters: CatalogFilters) => {
  const buttons = document.querySelectorAll('[aria-controls]');
  [...buttons].forEach((b) => {
    const attr = b.getAttribute('aria-controls') as string;
    if (
      (filters[attr] as []).length !== 0
      && Object.keys(filters[attr]).length !== 0
    ) {
      (<HTMLElement>document.getElementById(attr)).classList.remove('hidden');
      const svgList = document.querySelectorAll(`[aria-hidden=${attr}]`);
      [...svgList].forEach((s) => s.classList.toggle('hidden'));
    }
    b.addEventListener('click', () => {
      const svgList = document.querySelectorAll(`[aria-hidden=${attr}]`);
      [...svgList].forEach((s) => s.classList.toggle('hidden'));
      const list = document.getElementById(attr);
      (<HTMLElement>list).classList.toggle('hidden');
    });
  });
};

const closeModal = () => {
  const btnList = document.querySelectorAll('[aria-labelledby="modal-button"]');
  const modalList = document.querySelectorAll(
    '[aria-labelledby="modal-message"]',
  );
  [...btnList].forEach((b) => b.addEventListener('click', () => {
    [...modalList].forEach((m) => m.classList.toggle('hidden'));
  }));
};

const addDropdown = (filters: CatalogFilters) => {
  dropDownItemPerPage();
  dropDownMainSort();
  dropDownFilters(filters);
  closeModal();
};

export default addDropdown;
