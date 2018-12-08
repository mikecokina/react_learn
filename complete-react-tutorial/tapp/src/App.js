import React, { Component } from 'react';
import NewComp from './components/NewComp'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>tut app</h1>
        <p>welcome</p>
        <NewComp />
            
      </div>
    );
  }
}

export default App;
