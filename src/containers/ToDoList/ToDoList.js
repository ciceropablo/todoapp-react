import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToDoListItem from '../../containers/ToDoListItem/ToDoListItem';
import './ToDoList.css';

class ToDoList extends React.Component {
  render() {
    const toDoItems = this.props.toDos.map(item => {
      return <ToDoListItem key={item.id} item={item} />;
    });

    return toDoItems.length > 0 ? (
      <ul className="ToDoList">{toDoItems}</ul>
    ) : null;
  }
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
};

export default connect(state => state.toDos)(ToDoList);
