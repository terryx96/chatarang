import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Room extends Component {
    state = {
        name: this.props.name,
        messages: [],
    }
    render(){
        return(
           <li><NavLink to = {`/rooms/${this.props.room.name}`}>{this.props.room.displayName}</NavLink></li>
     )
    }


    

    
}

export default Room;