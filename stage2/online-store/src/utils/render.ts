type Attr = number | string | boolean;

type AttrArr = [string, Attr];

type Render = (
  elem: string,
  classNames: string,
  child?: Element | Element[] | string | number | null,
  parent?: Element | null,
  ...dataAttr: Array<AttrArr>
) => Element;

const render: Render = (elem, classNames, child, parent, ...dataAttr) => {
  let element: HTMLElement | null = null;
  try {
    element = document.createElement(elem);
  } catch (error) {
    throw new Error('Cant create HTMLElement!');
  }

  if (classNames) element.classList.add(...classNames.split(' '));

  if (child && Array.isArray(child)) {
    child.forEach((childElem) => childElem && (element as HTMLElement).appendChild(childElem));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        (element as HTMLElement).setAttribute(attrName, '');
      }
      if (attrName.slice(0, 5) === 'data-') {
        (element as HTMLElement).dataset[attrName.slice(5)] = attrValue as string;
      } else {
        // (attrName.match(/value|id|name|title|href|style|src|alt|placeholder|type|for|cols|rows|autocorrect|spellcheck/))
        (element as HTMLElement).setAttribute(attrName, attrValue as string);
      }
    });
  }
  return element;
};

export default render;
