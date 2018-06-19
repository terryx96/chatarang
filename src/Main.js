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
                <Sidebar getRooms = {this.getRooms} roomName = {this.state.roomName} user = {this.props.user} signOut = {this.props.signOut} getName = {this.getName}/>
                <Chat rooms = {this.state.rooms} user = {this.props.user} roomName = {this.state.roomName}/>
            </div>
        )
    }
    //roomName = {this.state.roomName.name}

     getName = (roomName) => {
         if(roomName.name === 'new') return null;
        const room = this.state.rooms[roomName];

        if(room){
            this.setState({roomName: room});
        }
        else{
            this.loadValidRoom();
        }

       
    }

    getRooms = (rooms) => {
        this.setState({rooms});
    }

    loadValidRoom = () => {
        const room = Object.keys(this.state.rooms)[0];
        this.props.history.push(`/rooms/${room}`);
    }

}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main;