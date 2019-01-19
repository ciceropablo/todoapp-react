import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import ToDoList from './ToDoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ToDoList />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
