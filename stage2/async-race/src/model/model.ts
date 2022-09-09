import { Winner, WinnersResult, ViewType } from "../types/types";
import { Cars, getPath } from "./cars";

class Model extends Cars {

  mountGarageState = async () => {
    const dataCars = await this.getCars();
    this.state.cars = dataCars.items || [];
    this.state.carsCount = +(dataCars.total as string);
  };

  mountWinnersState = async () => {
    const { winnersPage, sortBy, sortOrder } = this.state;
    const dataWinners = await this.getWinners(
      winnersPage,
      10,
      sortBy,
      sortOrder
    );
    this.state.winners = dataWinners.items || [];
    this.state.winnersCount = +(dataWinners.total as string);
  };

  updateView = (view: ViewType) => {
    this.state.view = view;
  };

  getWinners = async (
    page: number,
    limit: number,
    sort?: string | null,
    order?: string | null
  ) => {
    const result = {} as WinnersResult;
    let tempItems = [] as Winner[];
    const sortString = sort && order ? `&_sort=${sort}&_order=${order}` : "";
    await fetch(
      `${getPath("winners")}?_page=${page}&_limit=${limit}${sortString}`
    )
      .then((res) => {
        result.total = res.headers.get("X-Total-Count");
        return res.json();
      })
      .then((data: Winner[]) => {
        tempItems = data;
      })
      .catch((err: Error) => console.error(err));

    result.items = await Promise.all(
      tempItems.map(async (item) =>
        Object.assign(item, {
          car: await this.getCar(item.id as number),
        })
      )
    );
    return result;
  };

  getWinner = async (id: number) => fetch(getPath("winners", id));

  createWinner = async (body: Winner) =>
    (
      await fetch(getPath("winners"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      })
    ).json();

  deleteWinner = async (id: number) =>
    (await fetch(getPath("winners", id), { method: "DELETE" })).json();

  updateWinner = async (id: number, body: Winner) =>
    (
      await fetch(getPath("winners", id), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      })
    ).json();

  saveWinner = async (id: number, time: number) => {
    const { winners } = this.state
    const inWinners = winners.some((winner) => winner.id === id)
    if (inWinners) {
      const winner = winners.filter((item) => item.id === id)[0];
      await this.updateWinner(id, {
        wins: winner.wins + 1,
        time: time > winner.time ? winner.time : time,
      });
    } else {
      await this.createWinner({ id, wins: 1, time });
    }
  };
}

export default Model;
