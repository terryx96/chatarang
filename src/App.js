import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';

let id = 0;

class App extends Component {
  state = {
    user: {
      uid: ++id,
      displayName: "",
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
          (this.state.user.displayName) ? 
        ( <Main user = {this.state.user} signOut = {this.signOut}/> ) :
        (<SignIn signIn = {this.signIn}/>)
        }
      </div>
    );
  }

  signIn = (oauthuser) =>{
    const user = {
      uid: oauthuser.uid,
      displayName: oauthuser.displayName,
      email: oauthuser.email,
      photoUrl: oauthuser.photoURL,
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
