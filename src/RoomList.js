import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Room from './Room';
import base from "./base";

class RoomList extends Component {
    state = {
        rooms: {
           
        },
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
        return(
            <nav className={`RoomList ${css(styles.nav)}`} >
                <h2>Rooms</h2>
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

const styles = StyleSheet.create({
    nav: {
        padding: '0 1rem',
    },
})

export default RoomList;