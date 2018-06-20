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

    filteredRoomNames = () => {
        return Object.keys(this.state.rooms)
                .filter(roomName => {
                    const room = this.state.rooms[roomName]
                    if(!room) return false

                    return room.public || this.includesCurrentUser(room);

            })
    }

    filteredRooms = () => {
        return this.filteredRoomNames()
                        .map(roomName => this.state.rooms[roomName]);
    }

    includesCurrentUser = (room) => {
        const members = room.members || []
        return members.find(userOption => userOption.value === this.props.user.uid)
    }

    addRoom = (room) => {
        const user = this.props.user
        if(!room.public){
            room.members.push({
                label: `${user.displayName} (${user.email})`,
                value: user.uid
            })
        }

        const rooms = {...this.state.rooms};
        rooms[room.name] = room;
        this.setState({rooms})
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
                <Sidebar rooms = {this.filteredRooms()} addRoom = {this.addRoom} users = {this.props.users} getRooms = {this.getRooms} roomName = {this.state.roomName} user = {this.props.user} signOut = {this.props.signOut} getName = {this.getName}/>
                <Chat removeRoom = {this.removeRoom} rooms = {this.state.rooms} user = {this.props.user} roomName = {this.state.roomName}/>
            </div>
        )
    }
    //roomName = {this.state.roomName.name}

     getName = (roomName) => {
         if(roomName === 'new') return null;
        const room = this.filteredRooms().find(room => room.name === roomName);

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