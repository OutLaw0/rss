import { AppState, RaceResult } from "../types/types";

import View from "../view/view";

import Model from "../model/model";

import { setBtnDisable, setBtnEnable } from "../view/tools";

class RaceController {
  state;

  view;

  model;
  
  constructor(state: AppState, model: Model, view: View) {
    this.model = model;
    this.state = state;
    this.view = view;
  }

  startDriving = async (
    id: number,
    btnName: string,
    carName?: string,
    carColor?: string
  ) => {
    setBtnDisable(btnName, id);
    setBtnDisable("select", id);
    setBtnDisable("remove", id);
    setBtnEnable("stop", id);

    const { velocity, distance } = await this.model.startEngine(id);
    let time = Math.round(distance / velocity);

    this.state.animateFrames[id] = this.view.animateDriving(id, time);
    time = +(time / 1000).toFixed(2);

    const status = await this.model.driveMode(id);
    const result = status !== undefined ? status.success : false;
    if (!result) {
      window.cancelAnimationFrame(this.state.animateFrames[id].id);
      throw new Error("error 500");
    }
    if (result) return { id, time, carName, carColor };
  };

  stopDriving = async (id: number, name: string) => {
    setBtnDisable(name, id);
    await this.model.stopEngine(id);
    this.view.returnCar(id);
    if (this.state.animateFrames[id].id)
      cancelAnimationFrame(this.state.animateFrames[id].id);
    setBtnEnable("start", id);
    setBtnEnable("select", id);
    setBtnEnable("remove", id);
  };

  handleRace = async () => {
    const promises = this.state.cars.map((car) =>
      this.startDriving(car.id as number, "start", car.name, car.color)
    );
    const { id, time, carName, carColor } = (await Promise.any(
      promises
    )) as RaceResult;

    await this.model.saveWinner(id, time);
    await this.model.mountWinnersState();
    this.view.renderWinners();
    this.view.showWinnerMsg(time, carName, carColor);
  };
}

export default RaceController;
