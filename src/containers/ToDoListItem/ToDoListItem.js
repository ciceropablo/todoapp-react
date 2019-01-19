import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeToDo, checkToDo } from '../../redux/actions';

import { CONFIRMATION } from '../../messages';
import './ToDoListItem.css';

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);

    const checked = this.props.item.checked;
    this.state = { checked };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const checked = e.target.checked;
    const id = this.props.item.id;
    this.setState({ checked });
    this.props.checkToDo(id, checked);
  }

  handleClick(e) {
    e.preventDefault();
    const confirmation = window.confirm(CONFIRMATION);
    if (confirmation) {
      const id = this.props.item.id;
      this.props.removeToDo(id);
    }
  }

  getModifierClass(status) {
    return status ? 'ToDoListItem__label--strikethrough' : '';
  }

  render() {
    const id = this.props.item.id;
    const checked = this.props.item.checked;
    const description = this.props.item.description;

    return (
      <li className="ToDoListItem">
        <input
          className="ToDoListItem__checkbox"
          type="checkbox"
          id={id}
          onChange={this.handleChange}
          checked={this.state.checked}
        />

        <label
          className={`ToDoListItem__label ${this.getModifierClass(checked)}`}
          htmlFor={id}
        >
          {description}
        </label>

        <button
          className="ToDoListItem__button ToDoListItem__confirmation-button"
          onClick={this.handleClick}
        >
          &#10005;
        </button>
      </li>
    );
  }
}

ToDoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  removeToDo: PropTypes.func.isRequired,
  checkToDo: PropTypes.func.isRequired
};

export default connect(
  null,
  { removeToDo, checkToDo }
)(ToDoListItem);
