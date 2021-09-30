import React, { Component } from 'react';
import ChecklistBox from './ChecklistBox';

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
        //console.log('data', data);
        this.setState({ checklists: data });
        console.log('state', this.state);
      })
      .catch((err) => console.log({ err }));
  }

  render() {
    let checklistArr = this.state.checklists.map((el) => {
      return <ChecklistBox key={el['_id']} checklist={el} />; //need return statement when levearging curly braces
    })
    //why did does this work outside of return

    return (
      <div className='ListDisplay'>
        {checklistArr}
      </div>
    );
  }
}

export default ChecklistDisplay;
