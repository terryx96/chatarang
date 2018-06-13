import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';

let id = 0;

class App extends Component {
  state = {
    user: {
      uid: ++id,
      userName: "",
    }
  }
  render() {
    return (
      <div className="App">
        {
          (this.state.user.userName) ? 
        ( <Main user = {this.state.user} /> ) :
        (<SignIn signIn = {this.signIn}/>)
        }
      </div>
    );
  }

  signIn = (name) =>{
    const user = {
      uid: "",
      userName: name,
    }
    this.setState({user});
  }
}

export default App;
