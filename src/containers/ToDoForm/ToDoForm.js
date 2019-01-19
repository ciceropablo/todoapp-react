import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToDo } from '../../redux/actions';

import './ToDoForm.css';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addToDo(this.state.value);
    this.setState(() => ({ value: '' }));
  }

  render() {
    return (
      <form className="ToDoForm" method="POST" onSubmit={this.handleSubmit}>
        <input
          className="ToDoForm__input"
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </form>
    );
  }
}

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired
};

export default connect(
  null,
  { addToDo }
)(ToDoForm);
