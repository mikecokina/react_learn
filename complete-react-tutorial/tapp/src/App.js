import React, { Component } from 'react';
import Users from './components/Users';
import AddUser from './components/AddUser';
import './css/style.css'


class App extends Component {
  state = {
    users: [
        { name: "Mike", age:31, state: "online", uid: 1},
        { name: "Chris", age: 21, state: "offline", uid: 2 },
        { name: "Mia", age: 22, state: "online", uid: 3 }
    ]
  };


  addUser = (user) => {
      user.uid = Math.random();
      let usersCopy = [...this.state.users];
      usersCopy.push(user);

      this.setState({
          users: usersCopy
      })
  };

  deleteUser = (uid) => {
      let usersCopy = [...this.state.users];
      usersCopy = usersCopy.filter(user => {
          return user.uid !== uid
      });
      this.setState({
          users: usersCopy
      });
      console.log(uid);
  };


  render() {
    return (
      <div className="App">
          <h1>tut app</h1>
          <p>welcome</p>
          <Users
              users={ this.state.users }
              deleteUserFn={this.deleteUser}
          />
          <AddUser
              addUserFn={this.addUser}
          />

      </div>
    );
  }
}

export default App;
