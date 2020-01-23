export const q = selector => document.querySelector(selector);

export const qall = selector => document.querySelectorAll(selector);

export const getAttr = (element, attr) => {
  return element.getAttribute(attr);
};

export const setAttr = (element, attr, value) => {
  element.setAttribute(attr, value);
  return element;
};
