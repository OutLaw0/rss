import { Car, FrameObj } from "../types/types";

const model = [
  "911 Turbo",
  "Boxster",
  "Cayenne",
  "Cayman",
  "Macan",
  "Panamera",
  "Defender",
  "Discovery",
  "Range",
  "A1",
  "A2",
  "A3",
  "A4",
  "200 D",
  "200 E",
  "Forester",
  "Impreza",
  "Camaro",
  "Captiva",
  "Corvette",
  "Cruze",
];
const brand = [
  "Porsche",
  "Suzuki",
  "Audi",
  "Kia",
  "Jeep",
  "Hyundai",
  "Lexus",
  "BMW",
  "Honda",
  "Subaru",
  "Mercedes",
  "Jaguar",
  "Volvo",
  "Nissan",
  "Infiniti",
  "Ford",
  "Dodge",
];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomName = () => {
  return `${brand[Math.floor(Math.random() * brand.length)]} ${
    model[Math.floor(Math.random() * model.length)]
  }`;
};

const getRandomCar = (): Car => {
  return {
    name: getRandomName(),
    color: getRandomColor(),
  };
};

const getRandomCars = (number: number): Car[] => {
  const array = [];
  for (let i = 0; i < number; i += 1) {
    array.push(getRandomCar());
  }
  return array;
};

type Draw = (x: number, car: HTMLOrSVGImageElement, distance: number) => void;

type Timing = (x: number) => number;

type Animation = {
  timeDuration: number;
  elem: HTMLOrSVGImageElement;
  distance: number;
};

const timing: Timing = function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
};

const draw: Draw = function (progress, car, distance) {
  car.style.transform = `translateX(${progress * distance}px)`;
};

const animate = ({ timeDuration, elem, distance }: Animation) => {
  const start = performance.now();
  const animFrameObj = {} as FrameObj;
  animFrameObj.id = window.requestAnimationFrame(function anim(time) {
    let timeFraction = (time - start) / timeDuration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = timing(timeFraction);

    draw(progress, elem, distance);

    if (timeFraction < 1) {
      animFrameObj.id = window.requestAnimationFrame(anim);
    }
  });

  return animFrameObj;
};

const getPositionAtCenter = (element: Element) => {
  const { top, left, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
};

const getHtmlDistance = (a: Element, b: Element) => {
  const aPosition = getPositionAtCenter(a);
  const bPosition = getPositionAtCenter(b);

  return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
};

export { getRandomCars, animate, getHtmlDistance };
