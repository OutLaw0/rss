import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { RangeOptions, TypesOptions, RangeOptionsBase } from '../types/catalogTypes';

type OnChange = (type: string, options: RangeOptionsBase) => void;

class Slider {
  type: TypesOptions;

  constructor(type: TypesOptions) {
    this.type = type;
  }

  render(initSettings: RangeOptions, settings: RangeOptionsBase, type: string, func: OnChange) {
    const { min } = initSettings;
    const { max } = initSettings;
    const minValue = settings.min ? settings.min : initSettings.min;
    const maxValue = settings.max ? settings.max : initSettings.max;
    const container = document.querySelector(`.filters__${type} .slider-box`) as HTMLElement;

    const slider = `<div class="row" data-type="${type}">
      <div class="slider-base">
        <div id="slider_${type}">
        </div>
      </div>
     </div>`;
    container.innerHTML = slider;

    const connectedSlider: noUiSlider.target = document.getElementById(`slider_${type}`) as noUiSlider.target;

    noUiSlider.create(connectedSlider, {
      animationDuration: 300,
      start: [minValue, maxValue],
      step: 1,
      connect: true,
      tooltips: {
        to(numericValue) {
          return numericValue.toFixed(0);
        },
      },
      range: {
        min: +min,
        max: +max,
      },
    });

    connectedSlider.noUiSlider?.on('change', (values) => {
      let options: RangeOptionsBase = {
        min: (+values[0]).toFixed(0),
        max: (+values[1]).toFixed(0),
      };
      if (+(+values[0]).toFixed(0) === +min && +(+values[1]).toFixed(0) === +max) {
        options = {};
      }
      func(type, options);
    });
  }

  resetSlider(arr: [number, number]): void {
    const connectedSlider: noUiSlider.target = document.getElementById(`slider_${this.type}`) as noUiSlider.target;
    connectedSlider.noUiSlider?.set(arr);
  }
}

export default Slider;
