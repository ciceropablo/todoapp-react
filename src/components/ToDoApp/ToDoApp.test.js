import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import ToDoApp from './ToDoApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ToDoApp />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
