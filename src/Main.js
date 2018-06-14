import React, {Component} from 'react';

import Sidebar from './Sidebar';
import Chat from './Chat';

class Main extends Component{
    state = {
        roomName: "general",
    }
    render(){
        return(
            <div className = "Main" style = {styles}>
                <Sidebar user = {this.props.user} signOut = {this.props.signOut} getName = {this.getName}/>
                <Chat user = {this.props.user} roomName = {this.state.roomName}/>
            </div>
        )
    }

    getName = (roomName) => {
      this.setState({roomName});  
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main;