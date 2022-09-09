import {
  AppState,
  ViewType,
  CarHandler,
  SettingsHandler,
  RaceHandler,
} from "../types/types";
import { getElement } from "./tools";

class Bind {
  state: AppState;

  constructor(state: AppState) {
    this.state = state;
  }

  bindNav = (handler: (view: ViewType) => void) => {
    const navBtn = document.querySelectorAll(".nav__list .btn");
    [...navBtn].forEach((btn) =>
      btn.addEventListener("click", () => {
        const btnName = (<HTMLElement>btn).dataset.btn;
        if (this.state.view !== btnName) {
          getElement(".garage__settings").classList.toggle("hidden");
          getElement(".garage").classList.toggle("hidden");
          getElement(".winners").classList.toggle("hidden");
          handler(btnName as ViewType);
        }
      })
    );
  };

  bindCar = (handler: CarHandler) => {
    getElement(".garage").addEventListener("click", (e) => {
      let carId = null;
      try {
        carId = +(<string>(
          (<HTMLElement>(<HTMLElement>e.target).closest(".car")).dataset.id
        ));
      } catch (error) {
        console.log("Its not a car button");
      }

      const btnName = <string>(<HTMLElement>e.target).dataset.btn;
      if (carId && btnName)
        handler(carId, btnName).catch((err) => console.error(err));
    });
  };

  bindSettings = (handler: SettingsHandler, raceHandler: RaceHandler) => {
    getElement(".garage__settings").addEventListener("click", (e) => {
      const submitBtnName = (<HTMLElement>e.target).dataset.submit;
      const raceBtnName = (<HTMLElement>e.target).dataset.btn;

      if (submitBtnName) {
        e.preventDefault();
        const carSettings = {
          name: (<HTMLInputElement>getElement(`#input-${submitBtnName}`)).value,
          color: (<HTMLInputElement>getElement(`#input-color-${submitBtnName}`))
            .value,
        };
        if (carSettings.name.length > 0 && carSettings.name !== " ")
          handler(carSettings, submitBtnName).catch((err) =>
            console.error(err)
          );
      }

      if (raceBtnName) {
        raceHandler(raceBtnName).catch((err) => console.error(err));
      }
    });
  };

  bindRaceSettings = (handler: RaceHandler) => {
    getElement(".settings__race").addEventListener("click", (e) => {
      const btnName = <string>(<HTMLElement>e.target).textContent;
      handler(btnName).catch((err) => console.error(err));
    });
  };

  bindPagination = (handler: (name: string) => Promise<void>) => {
    getElement(".pagination").addEventListener("click", (e) => {
      handler(
        (<string>(<HTMLElement>e.target).textContent).toLowerCase()
      ).catch((err) => console.error(err));
    });
  };

  bindTable = (handler: (name: string) => Promise<void>) => {
    getElement(".winners").addEventListener("click", (e) => {
      let btnName = (<string>(<HTMLElement>e.target).textContent).toLowerCase();
      if (btnName === "wins" || btnName === "best") {
        btnName = btnName === "best" ? "time" : btnName;
        handler(btnName).catch((err) => console.error(err));
      }
    });
  };
}

export default Bind;
