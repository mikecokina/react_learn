import React, { Component } from 'react';
import NewComp from './components/NewComp'


class App extends Component {
  state = {
    users: [
        { name: "Mike", age:25, state: "online", uid: 1},
        { name: "Chris", age: 21, state: "offline", uid: 2 },
        { name: "Mia", age: 22, state: "online", uid: 3 }
    ]
  };


  render() {
    return (
      <div className="App">
          <h1>tut app</h1>
        <p>welcome</p>
        <NewComp
            users={ this.state.users }
        />

      </div>
    );
  }
}

export default App;
