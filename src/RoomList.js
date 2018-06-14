import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Room from './Room';
import base from "./base";
import RoomForm from './RoomForm'

class RoomList extends Component {
    state = {
        rooms: {
        },
        showRoomForm: false,
    }

    showRoomForm = () => {
        this.setState({showRoomForm: true});
    }

    hideRoomForm = () => {
        this.setState({showRoomForm: false});
    }

    componentDidMount(){
        base.syncState("rooms", {
            context: this,
            state: "rooms",
        })
    }

    addRoom = (room) => {
        const rooms = {...this.state.rooms};
        rooms[room.name] = room;
        this.setState({rooms})
    }

    render(){
        if(this.state.showRoomForm){
            return <RoomForm addRoom = {this.addRoom} hideRoomForm = {this.hideRoomForm}/>
        }
        else{
        return(
            <nav className={`RoomList ${css(styles.nav)}`} >
                <div className = {`${css(styles.heading)}`}>
                    <h2>Rooms</h2>
                    <button
                    className = {`${css(styles.button)}`}
                    onClick = {this.showRoomForm}
                    >
                    <i className="fas fa-plus"></i></button>
                </div>
                <ul>
                    {
                        Object.keys(this.state.rooms).map(
                            r => (
                                <Room key = {r} getName = {this.props.getName} room = {this.state.rooms[r]} />
                            )

                        )
                    }
                </ul>
            </nav>
        )
    }
    }
}

const styles = StyleSheet.create({
    nav: {
        padding: '0 1rem',
    },
    heading: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button:{
        border: 0,
        backgroundColor: 'transparent',
        outline: 0,
        padding: 0,
        color: 'rgba(255,255,255,.4)',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'color 0.25s ease-out',

        ':hover': {
            color: 'white',

        }
    }
})

export default RoomList;