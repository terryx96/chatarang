import React, {Component} from 'react';

class Room extends Component {
    state = {
        name: this.props.name,
    }
    render(){
        return(
           <li><a onClick={this.setName}>{this.state.name}</a></li>
     )
    }

    setName = () =>{
        this.props.getName(this.state.name);
    }
}

export default Room;