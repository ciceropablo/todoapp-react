import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import ToDoForm from './ToDoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ToDoForm />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
