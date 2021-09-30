import React, { Component } from 'react';
import ChecklistCreator from './ChecklistCreator';
import ChecklistDisplay from './ChecklistDisplay';

class ChecklistContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='innerbox'>
        <ChecklistCreator />
        <ChecklistDisplay />
      </div>
    );
  }
}
export default ChecklistContainer;
