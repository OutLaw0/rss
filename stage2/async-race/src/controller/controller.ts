import View from "../view/view";
import Model from "../model/model";
import Pagination from "./pagination";
import RaceController from "./race";
import { getRandomCars } from "./utils";
import { setBtnDisable, setBtnEnable } from "../view/tools";
import { AppState, Car } from "../types/types";

class App {
  state: AppState;

  view: View;

  model: Model;

  pagination: Pagination;

  race: RaceController;

  constructor() {
    this.model = new Model();
    this.state = this.model.state;
    this.view = new View(this.state);
    this.pagination = new Pagination(this.state, this.model, this.view);
    this.race = new RaceController(this.state, this.model, this.view);
  }

  init = async () => {
    await this.model.mountGarageState();
    await this.model.mountWinnersState();
    this.view.render();
    this.mountListeners();
  };

  mountListeners = () => {
    this.view.bindNav(this.model.updateView);
    this.view.bindCar(this.handleCar);
    this.view.bindSettings(this.handleSettings, this.handleGarage);
    this.view.bindPagination(this.handlePagination);
    this.view.bindTable(this.handlerSort);
  };

  handleCar = async (id: number, name: string) => {
    switch (name) {
      case "remove": {
        await this.model.deleteCar(id);
        await this.model.deleteWinner(id);
        await this.model.mountGarageState();
        await this.model.mountWinnersState();
        this.view.renderGarage();
        this.view.renderWinners();
        break;
      }
      case "select": {
        this.state.selectedCar = id;
        const selectedCarSettings = await this.model.getCar(id);
        this.view.setUpdateSettings(selectedCarSettings);
        break;
      }
      case "start": {
        await this.race.startDriving(id, name);
        break;
      }
      case "stop": {
        await this.race.stopDriving(id, name);
        break;
      }
    }
  };

  handleSettings = async (carSettings: Car, name: string) => {
    switch (name) {
      case "create": {
        await this.model.createCar(carSettings);
        break;
      }
      case "update": {
        const { selectedCar } = this.state;
        await this.model.updateCar(selectedCar as number, carSettings);
        await this.model.mountWinnersState();
        this.view.renderWinners();
        break;
      }
    }
    this.view.renderSettings();
    await this.model.mountGarageState();
    this.view.renderGarage();
  };

  handleGarage = async (name: string) => {
    switch (name) {
      case "race": {
        setBtnDisable(name);
        this.view.setAllBtnDisable();
        setBtnEnable('reset');
        await this.race.handleRace();
        break;
      }
      case "reset": {
        this.state.cars.map((car) =>
          this.race.stopDriving(car.id as number, "stop")
        );
        this.view.setAllBtnEnable();
        setBtnEnable("race");
        setBtnDisable(name);
        break;
      }
      case "generate": {
        setBtnDisable(name);
        const array = getRandomCars(100);
        await Promise.all(array.map(async (a) => this.model.createCar(a)));
        await this.model.mountGarageState();
        this.view.renderGarage();
        setBtnEnable(name);
        break;
      }
    }
  };

  handlePagination = async (name: string) => {
    if (name === "next") await this.pagination.next();
    if (name === "prev") await this.pagination.prev();
  };

  handlerSort = async (btnName: string) => {
    if (this.state.sortBy === btnName) {
      this.state.sortOrder = this.state.sortOrder === "asc" ? "desc" : "asc";
    } else {
      this.state.sortOrder = "asc";
    }
    this.state.sortBy = btnName;
    await this.model.mountWinnersState();
    this.view.renderWinners();
  };
}

export default App;
