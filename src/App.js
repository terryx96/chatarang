import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Main from './Main';
import SignIn from './SignIn';
import {auth} from './base';

class App extends Component {
  constructor() {
    super();
    const user = JSON.parse(localStorage.getItem('user')) || {}
    this.state = {
      user,
    }
    }
  
  

  componentDidMount(){
    auth.onAuthStateChanged(
      user => {
        if(user){
          this.signIn(user);
        }
        else{
          this.handleUnauth();
        }
      }
    )
  }

  handleUnauth = () => {
    this.setState({user: {}});
    localStorage.removeItem('user');
  }



  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            path = '/sign-in'
            render = {() => (
              this.signedIn()
              ? <Redirect to = '/rooms/general' />
              : <SignIn />
            )} />
          
          <Route
            path = '/rooms/:roomName'
            render = {navProps => (
              this.signedIn()
              ? <Main user = {this.state.user}
                      signOut = {this.signOut}
                      {...navProps}
                />
              : <Redirect to = '/sign-in' />  
            )} />

          <Route
            render = {() => (
              this.signedIn()
              ? <Redirect to='/rooms/general' />
              : <Redirect to = '/sign-in' />
            )} />
          
        </Switch>

        {/* {
          (this.state.user.displayName) ? 
        ( <Main user = {this.state.user} signOut = {this.signOut}/> ) :
        (<SignIn />)
        } */}
      </div>
    );
  }

  signedIn = () =>{
    return this.state.user.displayName;
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
    auth.signOut();
  }
}

export default App;
