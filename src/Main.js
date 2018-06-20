import React, {Component} from 'react';
import base from './base';
import Sidebar from './Sidebar';
import Chat from './Chat';

class Main extends Component{
    state = {
        roomName: { },
        rooms: {},
    }

    componentDidMount() {
        base.syncState("rooms", {
            context: this,
            state: "rooms",
            then: () => this.getName(this.props.match.params.roomName)
        })

        
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.roomName !== this.props.match.params.roomName){
        this.getName(
            this.props.match.params.roomName
        )
    }
    }

    render(){
        return(
            <div className = "Main" style = {styles}>
                <Sidebar users = {this.props.users} getRooms = {this.getRooms} roomName = {this.state.roomName} user = {this.props.user} signOut = {this.props.signOut} getName = {this.getName}/>
                <Chat removeRoom = {this.removeRoom} rooms = {this.state.rooms} user = {this.props.user} roomName = {this.state.roomName}/>
            </div>
        )
    }
    //roomName = {this.state.roomName.name}

     getName = (roomName) => {
         if(roomName === 'new') return null;
        const room = this.state.rooms[roomName];

        if(room){
            this.setState({roomName: room});
        }
        else{
            this.loadValidRoom();
        }

       
    }

    removeRoom = (room) => {
        const rooms = {...this.state.rooms};
        rooms[room.name] = null;
        this.setState({rooms}, this.loadValidRoom);
    }

    getRooms = (rooms) => {
        this.setState({rooms});
    }

    loadValidRoom = () => {
        const room = Object.keys(this.state.rooms).find(
            roomName => this.state.rooms[roomName]
        );
        this.props.history.push(`/rooms/${room}`);
    }

}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main;