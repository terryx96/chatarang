import React from 'react';

import RoomList from './RoomList';
import UserInfo from './UserInfo'

const Sidebar = (props) => {
        return (
              <aside className="Sidebar" style = {styles.sidebar}>
            <UserInfo user = {props.user} signOut = {props.signOut} />
                <h1 style = {{
                    ...styles.children,
                    ...styles.h1,
                }}>
                XTBC 18</h1>
                <RoomList roomName = {props.roomName}/>
            </aside>
        )
}

const styles = {
    sidebar:{
        backgroundColor: "#550055",
        color: "rgba(255, 255, 255, 0.8)",
        width: "12rem",
        padding:" 1rem 0",
        display: "flex",
        flexDirection: "column",
        left: "-100",
    },
    children: {
        padding: '0 1rem',
    },
    h1:{
        color: 'white',
        fontSize: '1.2rem',
        marginTop: 0,
    },
    icon:{
        display: "flex",
        flexDirection: "row",
        float: "right",
    }

}

export default Sidebar