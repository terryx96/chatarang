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

  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      this.setState({user});
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
    localStorage.setItem('user', JSON.stringify(user));
  }

  signOut = () => {
    this.setState({user: {}});
    localStorage.removeItem('user');
  }
}

export default App;
