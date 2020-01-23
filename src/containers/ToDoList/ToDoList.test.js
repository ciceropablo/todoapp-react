import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import ToDoList from './ToDoList';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    render(
      <Provider store={store}>
        <ToDoList />
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

it('renders without crashing', () => {});
