//instead of rendering put a <p> Hello World <p>

import React, { Component } from 'react';
import ChecklistContainer from './ChecklistContainer';
//import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Checklist App</h1>
        <ChecklistContainer />
      </div>
    );
  }
}

export default App;
