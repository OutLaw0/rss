import { AppState } from "../types/types";

import View from "../view/view";

import Model from "../model/model";

class Pagination {
  state;

  view;

  model;

  constructor(state: AppState, model: Model, view: View) {
    this.model = model;
    this.state = state;
    this.view = view;
  }

  next = async () => {
    const {
      view,
      carsCount,
      garagePage,
      winnersCount,
      winnersPage,
    } = this.state;
    if (view === "garage") {
      if (garagePage * 7 < carsCount) {
        this.state.garagePage += 1;
        await this.model.mountGarageState();
        this.view.renderGarage();
      }
    } else {
      if (winnersPage * 10 < winnersCount) {
        this.state.winnersPage += 1;
        await this.model.mountWinnersState();
        this.view.renderWinners();
      }
    }
  };

  prev = async () => {
    const { view, garagePage, winnersPage } = this.state;
    if (view === "garage") {
      if (garagePage > 1) {
        this.state.garagePage -= 1;
        await this.model.mountGarageState();
        this.view.renderGarage();
      }
    } else {
      if (winnersPage > 1) {
        this.state.winnersPage -= 1;
        await this.model.mountWinnersState();
        this.view.renderWinners();
      }
    }
  };
}

export default Pagination;
