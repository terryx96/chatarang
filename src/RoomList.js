import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Room from './Room';


class RoomList extends Component {
    state = {
        rooms: [
            {name: "general"},
            {name: "random"},
            {name: "the cute room",}
        ],
    }
    render(){
        return(
            <nav className={`RoomList ${css(styles.nav)}`} >
                <h2>Rooms</h2>
                <ul>
                    {this.state.rooms.map(r => <Room name = {r.name} key = {r.name} getName = {this.props.getName}/>)}
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