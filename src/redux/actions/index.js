import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from './actionTypes';

export const addToDo = description => ({
  type: ADD_TODO,
  payload: {
    id: `todo-${Date.now()}`,
    checked: false,
    description
  }
});

export const removeToDo = id => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
});

export const checkToDo = (id, checked) => ({
  type: CHECK_TODO,
  payload: {
    id,
    checked
  }
});
