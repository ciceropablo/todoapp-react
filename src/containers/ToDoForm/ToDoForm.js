import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../redux/actions';

import './ToDoForm.css';

const ToDoForm = () => {
  const [toDoDescription, setToDoDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addToDo(toDoDescription));
    setToDoDescription('');
  };

  const handleChange = ({ target }) => {
    setToDoDescription(target.value);
  };

  return (
    <form className="ToDoForm" method="POST" onSubmit={handleSubmit}>
      <input
        className="ToDoForm__input"
        type="text"
        onChange={handleChange}
        value={toDoDescription}
      />
    </form>
  );
};

export default ToDoForm;
