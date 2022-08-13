import render from '../utils/render';
import { ItemColor } from '../types/item';
import { TypesOptions } from '../types/catalogTypes';

type OnSelect = (type: TypesOptions, options: ItemColor[]) => void;

interface RadioProps {
  initSettings: ItemColor[];
  settings: ItemColor[];
  type: TypesOptions;
  func: OnSelect;
}

class ColorFilter {
  props: RadioProps;

  constructor(props: RadioProps) {
    this.props = props;
  }

  render() {
    const colorPalette = {
      White: 'white',
      Gray: 'gray-200',
      Black: 'gray-900',
      Blue: 'blue-500',
      Brown: 'amber-900',
      Green: 'green-500',
      Lavender: 'purple-300',
      Orange: 'orange-500',
      Purple: 'violet-500',
      Red: 'red-500',
      Yellow: 'yellow-300',
    };
    const { initSettings, settings } = this.props;
    const container = document.querySelector('.color__wrapper') as HTMLElement;

    const fragment = new DocumentFragment();
    initSettings.forEach((color, i) => {
      const elem = render(
        'label',
        `relative flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-${colorPalette[color]} focus:outline-none`,
        null,
        null,
        ['data-color', color],
      );

      render(
        'input',
        'sr-only',
        null,
        elem,
        ['type', 'radio'],
        ['name', 'color-choice'],
        ['value', color],
        ['aria-labelledby', `color-choice-${i}-label`],
      );
      render('span', 'sr-only', color, elem, ['id', `color-choice-${i}-label`]);
      render('span', `h-8 w-8 rounded-full border border-black border-opacity-10 bg-${colorPalette[color]}`, '', elem, [
        'aria-hidden',
        true,
      ]);

      if (settings.includes(color)) elem.classList.add('ring-2');

      elem.addEventListener('click', (e) => {
        this.handler(e);
      });

      fragment.appendChild(elem);
    });

    container.innerHTML = '';
    container.append(fragment);
  }

  handler(e: Event) {
    e.preventDefault();

    const { type, settings, func } = this.props;
    let options = settings;
    const color = (<HTMLInputElement>e.currentTarget).dataset[type] as ItemColor;
    if (options.includes(color)) {
      (<HTMLElement>e.currentTarget).classList.remove('ring-2');
      options = options.filter((i) => i !== color);
    } else {
      (<HTMLElement>e.currentTarget).classList.add('ring-2');
      options.push(color);
    }
    this.props.settings = options;

    func(type, options);
  }
}

export default ColorFilter;
