import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from '../actions/actionTypes';

const initialState = {
  toDos: []
};

const toDos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, {
        toDos: [...state.toDos, action.payload]
      });
    }

    case REMOVE_TODO: {
      const id = action.payload.id;

      return Object.assign({}, state, {
        toDos: [...state.toDos.filter(toDo => toDo.id !== id)]
      });
    }

    case CHECK_TODO: {
      const id = action.payload.id;
      const checked = action.payload.checked;

      const toDo = state.toDos.find(toDo => toDo.id === id);
      if (toDo) {
        toDo.checked = checked;
      }

      return Object.assign({}, state, {
        toDos: [...state.toDos]
      });
    }

    default: {
      return state;
    }
  }
};

export default toDos;
