import React, { Component } from 'react';

class ChecklistDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklists: [],
    };
  }

  componentDidMount() {
    fetch('/checklist')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        this.setState({ checklists: data });
      });
  }

  render() {
    return (
      <div className='ListDisplay'>
        <h4>Test Title</h4>
        <input type='text' placeholder='New Task'></input>
        <button>Add New Task</button>
      </div>
    );
  }
}

export default ChecklistDisplay;
