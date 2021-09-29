//instead of rendering put a <p> Hello World <p>

import React, { Component } from 'react';
//import { Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Test</div>
        <p>Sup</p>
      </div>
    );
  }
}

export default App;
