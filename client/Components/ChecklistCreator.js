import React, { Component } from 'react';

class ChecklistCreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ListCreator">
        <h2>Create A New List</h2>
        <input type='text' placeholder='New List Title'></input>
        <button>Add New List</button>
      </div>
    );
  }
}

export default ChecklistCreator;
