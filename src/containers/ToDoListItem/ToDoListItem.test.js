import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { q, getAttr } from '../../utils';

import ToDoListItem from './ToDoListItem';
import { CONFIRMATION } from '../../messages';

let container;
let toDo;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);

  toDo = {
    id: `todo-${Date.now()}`,
    checked: false,
    description: 'foo'
  };

  act(() => {
    render(
      <Provider store={store}>
        <ToDoListItem toDo={toDo} />
      </Provider>,
      container
    );
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('passing props for toDo', () => {
  const label = q('label');
  const input = q('input');
  const button = q('button');

  expect(input.checked).toBe(toDo.checked);

  expect(getAttr(label, 'for')).toBe(toDo.id);
  expect(label.textContent).toBe(toDo.description);

  expect(button.textContent).toBe('✕');
});

it('check and uncheck toDo', () => {
  const label = q('label');
  const input = q('input');

  act(() => {
    input.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(input.checked).toBe(true);
  expect(getAttr(label, 'class')).toBe(
    'ToDoListItem__label ToDoListItem__label--strikethrough'
  );

  act(() => {
    input.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(input.checked).toBe(false);
  expect(getAttr(label, 'class')).toBe('ToDoListItem__label');
});

it('click to remove toDo', () => {
  const button = q('button');

  window.confirm = jest.fn();
  window.confirm.mockReturnValue(true);

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(window.confirm).toHaveBeenCalledTimes(1);
  expect(window.confirm).toHaveReturnedWith(true);
  expect(window.confirm).toHaveBeenCalledWith(CONFIRMATION);

  window.confirm = jest.fn();
  window.confirm.mockReturnValue(false);

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(window.confirm).toHaveBeenCalledTimes(1);
  expect(window.confirm).toHaveReturnedWith(false);
  expect(window.confirm).toHaveBeenCalledWith(CONFIRMATION);
});
