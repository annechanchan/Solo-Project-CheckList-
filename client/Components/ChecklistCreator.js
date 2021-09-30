import React, { Component } from 'react';
const regeneratorRuntime = require('regenerator-runtime');

class ChecklistCreator extends Component {
  constructor(props) {
    super(props);
  }

  async createList() {
    let inputTitle = await document.getElementById('inputTitle').value;
    console.log({ inputTitle });
    await fetch('/checklist', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ title: inputTitle }),
    })
      .then((titleData) => titleData.json())
      .then((titleData) => console.log({ titleData }));
  }

  render() {
    return (
      <div className='ListCreator'>
        <h2>Create A New List</h2>
        <input id='inputTitle' type='text' placeholder='New List Title'></input>
        <button onClick={this.createList}>Add New List</button>
      </div>
    );
  }
}

export default ChecklistCreator;
