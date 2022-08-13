const createElement = (tag: string, className?: string) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
};

const getElement = (selector: string): Element => {
  const element = document.querySelector(selector) as Element;
  return element;
};

const setBtnDisable = (btnName: string, id?: number) => {
  const prefix = id ? `.car[data-id="${id}"]  ` : "";
  const btn = <HTMLButtonElement>(
    getElement(`${prefix}.btn[data-btn="${btnName}"]`)
  );
  btn.disabled = true;
  btn.classList.add("inactive");
};

const setBtnEnable = (btnName: string, id?: number) => {
  const prefix = id ? `.car[data-id="${id}"]  ` : "";
  const btn = <HTMLButtonElement>(
    getElement(`${prefix}.btn[data-btn="${btnName}"]`)
  );
  btn.disabled = false;
  btn.classList.remove("inactive");
};

export { createElement, getElement, setBtnDisable, setBtnEnable };
