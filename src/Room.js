import React, {Component} from 'react';

class Room extends Component {
    state = {
        name: this.props.name,
        messages: [],
    }
    render(){
        return(
           <li><a onClick={this.handleClick}>{this.props.room.name}</a></li>
     )
    }

    handleClick = (ev) =>{
        ev.preventDefault();
        this.props.getName(this.props.room);
    }

    

    
}

export default Room;