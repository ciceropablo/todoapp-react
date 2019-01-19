import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import ToDoListItem from './ToDoListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const item = {
    id: `todo-${Date.now()}`,
    checked: false,
    description: 'foo'
  };
  debugger;
  ReactDOM.render(
    <Provider store={store}>
      <ToDoListItem item={item} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
