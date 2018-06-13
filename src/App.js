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
      email: "",
    }
  }
  render() {
    return (
      <div className="App">
        {
          (this.state.user.userName) ? 
        ( <Main user = {this.state.user} signOut = {this.signOut}/> ) :
        (<SignIn signIn = {this.signIn}/>)
        }
      </div>
    );
  }

  signIn = (email) =>{
    const user = {
      uid: "",
      userName: email.substring(0, email.indexOf("@")),
      email: email,
    }
    this.setState({user});
  }

  signOut = () => {
    this.setState({user: {}});
  }
}

export default App;
