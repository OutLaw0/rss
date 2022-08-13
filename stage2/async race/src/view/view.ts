import { Car, AppState } from "../types/types";
import { animate, getHtmlDistance } from "../controller/utils";
import { setCarLine } from "./car";
import getWinnersTemplate from "./table";
import {
  headerInner,
  footerInner,
  settingsInner,
  renderMainTemplate,
} from "./template";
import Bind from "./bind";
import {
  setBtnDisable,
  setBtnEnable,
  getElement,
  createElement,
} from "../view/tools";

class View extends Bind {
  header: HTMLElement;

  main: HTMLElement;

  footer: HTMLElement;

  state: AppState;

  constructor(state: AppState) {
    super(state);
    this.state = state;
    this.header = createElement("header", "header");
    this.main = createElement("main");
    this.footer = createElement("footer");
  }

  render = () => {
    this.header.insertAdjacentHTML("afterbegin", headerInner);
    const mainTemplate = renderMainTemplate(
      this.getGarageInner(),
      this.getWinnersInner()
    );
    this.main.insertAdjacentHTML("afterbegin", mainTemplate);
    this.footer.insertAdjacentHTML("afterbegin", footerInner);
    document.body.append(this.header, this.main, this.footer);
  };

  getGarageInner = () => {
    const { carsCount, garagePage, cars } = this.state;
    return `<h2>Garage ( ${carsCount} )</h2>
            <h3>Page # ${garagePage}</h3>
            <div class="garage__wrapper">
            ${cars.map((car) => setCarLine(car)).join("")}
            </div>`;
  };

  getWinnersInner = () => {
    const {
      winnersCount,
      winnersPage,
      winners,
      sortBy,
      sortOrder,
    } = this.state;
    return `<h2>Winners ( ${winnersCount} )</h2>
          <h3>Page # ${winnersPage}</h3>
          ${getWinnersTemplate(winners, sortBy, sortOrder)}
          `;
  };

  renderGarage = () => {
    getElement(".garage").innerHTML = this.getGarageInner();
  };

  renderOneCar = (car: Car) =>
    getElement(".garage__wrapper").append(setCarLine(car));

  renderWinners = () => {
    getElement(".winners").innerHTML = this.getWinnersInner();
  };

  renderSettings = () => {
    getElement(".garage__settings").innerHTML = settingsInner;
  };

  setUpdateSettings = (settings: Car) => {
    const inputName = <HTMLInputElement>getElement("#input-update");
    const inputColor = <HTMLInputElement>getElement("#input-color-update");
    const btn = <HTMLButtonElement>getElement('[data-submit="update"]');
    inputName.value = settings.name;
    inputColor.value = settings.color;
    inputName.disabled = false;
    inputColor.disabled = false;
    btn.disabled = false;
  };

  animateDriving = (id: number, duration: number) => {
    const car = getElement(
      `.car[data-id="${id}"] svg`
    ) as HTMLOrSVGImageElement;
    const flag = getElement(`.flag[data-id="${id}"]`) as HTMLElement;
    const distance = getHtmlDistance(car, flag) + 30;
    const animateID = animate({
      timeDuration: duration,
      elem: car,
      distance: distance,
    });
    return animateID;
  };

  setAllBtnDisable = () => {
    setBtnDisable("generate");
    (<HTMLButtonElement>getElement('[data-submit="create"]')).disabled = true;
    (<HTMLButtonElement>getElement('[data-submit="update"]')).disabled = true;
    (<HTMLButtonElement>getElement(".pagination .prev")).disabled = true;
    (<HTMLButtonElement>getElement(".pagination .next")).disabled = true;
  };

  setAllBtnEnable = () => {
    setBtnEnable("generate");
    (<HTMLButtonElement>getElement('[data-submit="create"]')).disabled = false;
    (<HTMLButtonElement>getElement('[data-submit="update"]')).disabled = false;
    (<HTMLButtonElement>getElement(".pagination .prev")).disabled = false;
    (<HTMLButtonElement>getElement(".pagination .next")).disabled = false;
  };

  returnCar = (id: number) => {
    const car = getElement(
      `.car[data-id="${id}"] svg`
    ) as HTMLOrSVGImageElement;
    car.style.transform = "translateX(0)";
  };

  showWinnerMsg = (time: number, carName: string, color: string) => {
    const modal = getElement(".modal") as HTMLElement;
    modal.innerHTML = `${carName} win! (${time}s)`;
    modal.style.color = `${color}`;
    modal.style.opacity = "1";
    setTimeout(() => (modal.style.opacity = "0"), 4000);
  };
}

export default View;
