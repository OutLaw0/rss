import render from '../utils/render';
import { MultiOptions, TypesOptions } from '../types/catalogTypes';

type OnSelect = (type: TypesOptions, options: MultiOptions[]) => void;

interface CheckboxProps {
  initSettings: MultiOptions[];
  settings: MultiOptions[];
  type: TypesOptions;
  func: OnSelect;
}

class CheckboxFilter {
  props: CheckboxProps;

  constructor(props: CheckboxProps) {
    this.props = props;
  }

  render() {
    const { initSettings, settings, type } = this.props;

    const container = document.querySelector(
      `.${type}__wrapper`,
    ) as HTMLElement;

    const fragment = new DocumentFragment();
    initSettings.forEach((item, i) => {
      const elem = render('div', 'flex items-center', null, null, [
        `data-${type}`,
        item,
      ]);

      const elemInput = render(
        'input',
        'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500',
        null,
        elem,
        ['id', `filter-${type}-${i}`],
        ['type', 'checkbox'],
        ['name', `${type}[]`],
        ['value', item],
      );
      render('label', 'ml-3 text-sm text-gray-600', item, elem, [
        'for',
        `filter-${type}-${i}`,
      ]);

      if (settings.includes(item)) (<HTMLInputElement>elemInput).checked = true;

      elem.addEventListener('input', (e) => {
        this.handler(e);
      });

      fragment.appendChild(elem);
    });

    container.innerHTML = '';
    container.append(fragment);
  }

  handler(e: Event) {
    const { type, settings, func } = this.props;
    let options = settings;
    const item = (<HTMLInputElement>e.currentTarget).dataset[
      type
    ] as MultiOptions;

    if (options.includes(item)) {
      options = options.filter((i) => i !== item);
    } else {
      options.push(item);
    }
    this.props.settings = options;

    func(type, options);
  }
}

export default CheckboxFilter;
