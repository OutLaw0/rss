import { TypesOptions } from '../types/catalogTypes';

type OnSelect = (type: string, options: boolean) => void;

const singleCheckbox = (settings: boolean, type: TypesOptions, func: OnSelect) => {
  const element = document.querySelector(`.filters__${type}`) as HTMLElement;
  (<HTMLInputElement>element.firstElementChild).checked = settings;
  element.addEventListener('input', () => {
    const options: boolean = (<HTMLInputElement>element.firstElementChild).checked;
    func(type, options);
  });
};

export default singleCheckbox;
