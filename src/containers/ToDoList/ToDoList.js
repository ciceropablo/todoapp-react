import React from 'react';
import { useSelector } from 'react-redux';

import ToDoListItem from '../../containers/ToDoListItem/ToDoListItem';
import './ToDoList.css';

const ToDoList = () => {
  const toDos = useSelector(({ toDos: { toDos } }) => toDos);

  const toDoItems = toDos.map(toDo => {
    return <ToDoListItem key={toDo.id} toDo={toDo} />;
  });

  return toDoItems.length > 0 ? (
    <ul className="ToDoList">{toDoItems}</ul>
  ) : null;
};

export default ToDoList;
