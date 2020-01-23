import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { q, getAttr, setAttr } from '../../utils';

import ToDoForm from './ToDoForm';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    render(
      <Provider store={store}>
        <ToDoForm />
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

it('type a text in field and submit form', () => {
  const form = q('form');
  const input = q('input');

  act(() => {
    setAttr(input, 'value', 'foo').dispatchEvent(
      new Event('change', { bubbles: true })
    );

    form.dispatchEvent(new Event('submit', { bubbles: true }));
  });

  expect(getAttr(input, 'value')).toBe('');
});
