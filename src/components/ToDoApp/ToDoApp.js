import React from 'react';

import ToDoForm from '../../containers/ToDoForm/ToDoForm';
import ToDoList from '../../containers/ToDoList/ToDoList';
import './ToDoApp.css';

const ToDoApp = () => (
  <div className="ToDoApp">
    <header>
      <h1>ToDoApp-React</h1>
      <ToDoForm />
    </header>
    <ToDoList />
  </div>
);

export default ToDoApp;
