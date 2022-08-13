type Car = {
  name: string;
  color: string;
  id?: number;
};

type Winner = {
  wins: number;
  time: number;
  id?: number;
  car?: Car;
};

type ViewType = "garage" | "winners";

interface AppState {
  view: ViewType;
  cars: Car[];
  carsCount: number;
  garagePage: number;
  winners: Winner[];
  winnersCount: number;
  winnersPage: number;
  sortBy: string | null;
  sortOrder: string | null;
  selectedCar: number | null;
  animateFrames: { [id: string]: FrameObj };
}

type CarsResult = {
  items: Car[];
  total: string | null;
};

type WinnersResult = {
  items: Winner[];
  total: string | null;
};

type EngineData = {
  velocity: number;
  distance: number;
};

type RaceResult = {
  id: number;
  time: number;
  carName: string;
  carColor: string;
};

type CarHandler = (id: number, btnName: string) => Promise<void>;

type SettingsHandler = (carSettings: Car, btnName: string) => Promise<void>;

type RaceHandler = (btnName: string) => Promise<void>;

type FrameObj = { [id: string]: number };

export {
  Car,
  Winner,
  AppState,
  ViewType,
  CarHandler,
  SettingsHandler,
  RaceHandler,
  WinnersResult,
  CarsResult,
  FrameObj,
  EngineData,
  RaceResult,
};
