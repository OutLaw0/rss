import { Car, CarsResult, AppState, EngineData } from "../types/types";
const getPath = (part: string, sec?: number) =>
  "http://127.0.0.1:3000/" + part + (sec ? `/${sec}` : "");

class Cars {
  state: AppState;

  constructor() {
    this.state = {
      view: "garage",
      cars: [],
      carsCount: 0,
      garagePage: 1,
      winners: [],
      winnersCount: 0,
      winnersPage: 1,
      sortBy: null,
      sortOrder: null,
      selectedCar: null,
      animateFrames: {},
    };
  }
  
  getCars = async (limit = 7) => {
    const result = {} as CarsResult;

    await fetch(`${getPath("garage")}?_page=${this.state.garagePage}&_limit=${limit}`)
      .then((res) => {
        result.total = res.headers.get("X-Total-Count");
        return res.json();
      })
      .then((data: Car[]) => {
        result.items = data;
      })
      .catch((err: Error) => console.error(err));
    return result;
  };

  getCar = async (id: number) => (await fetch(getPath("garage", id), { method: "GET" })).json() as Promise<Car>;
 
  createCar = async (body: Car) =>
    (
      await fetch(getPath("garage"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      })
    ).json();

  updateCar = async (id: number, body: Car) =>
    (
      await fetch(getPath("garage", id), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      })
    ).json();

  deleteCar = async (id: number) =>
    (await fetch(getPath("garage", id), { method: "DELETE" })).json();



  startEngine = async (id: number) =>
    (
      await fetch(`${getPath("engine")}?id=${id}&status=started`, {
        method: "PATCH",
      })
    ).json() as Promise<EngineData>;

  stopEngine = async (id: number) =>
    (
      await fetch(`${getPath("engine")}?id=${id}&status=stopped`, {
        method: "PATCH",
      })
    ).json();

  driveMode = async (id: number) => {
    try {
      const response = await fetch(
        `${getPath("engine")}?id=${id}&status=drive`,
        {
          method: "PATCH",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const status = response.status;
        const result = status === 200 ? true : false;
        return { status: status, success: result };
      }
    } catch (err) {
      window.cancelAnimationFrame(this.state.animateFrames[id].id);
    }
  };
}

export { Cars, getPath };
