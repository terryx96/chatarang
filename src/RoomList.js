import React, {Component} from 'react';
import Room from './Room';



class RoomList extends Component {
    state = {
        rooms: [
            {name: "general"},
            {name: "random"},
        ],
    }
    render(){
        return(
            <nav className="RoomList">
                <h2>Rooms</h2>
                <ul>
                    {this.state.rooms.map(r => <Room name = {r.name} />)}
                </ul>
            </nav>
        )
    }
}

const styles = {
    
}

export default RoomList;