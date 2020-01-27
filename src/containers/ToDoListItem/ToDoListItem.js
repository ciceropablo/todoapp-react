import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { checkToDo, removeToDo } from '../../redux/actions';
import { CONFIRMATION } from '../../messages';
import './ToDoListItem.css';

const ToDoListItem = ({ toDo: { id, checked, description } }) => {
  const [inputChecked, toggleInputChecked] = useState(checked);

  const dispatch = useDispatch();

  const handleChange = ({ target: { checked } }) => {
    toggleInputChecked(checked);
    dispatch(checkToDo(id, checked));
  };

  const handleClick = () => {
    const confirmation = window.confirm(CONFIRMATION);
    if (confirmation) {
      dispatch(removeToDo(id));
    }
  };

  return (
    <li className="ToDoListItem">
      <input
        className="ToDoListItem__checkbox"
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={inputChecked}
      />

      <label
        className={`ToDoListItem__label${
          inputChecked ? ' ToDoListItem__label--strikethrough' : ''
        }`}
        htmlFor={id}
      >
        {description}
      </label>

      <button
        className="ToDoListItem__button ToDoListItem__confirmation-button"
        onClick={handleClick}
      >
        &#10005;
      </button>
    </li>
  );
};

ToDoListItem.propTypes = {
  toDo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ToDoListItem;
