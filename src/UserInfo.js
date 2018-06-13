import React from 'react';
import RoomList from './RoomList';

import Avatar from './Avatar';

const UserInfo = ({user}) => {
    return (
        
            <div className="UserInfo" style = {styles.children}>
                <Avatar user = {user} email = "terry.wade@valpo.edu"/>
                <div className="user">{user.userName}</div>
                <a href="#">
                <i className="fas fa-sign-out-alt" styles = {styles.icon}></i>
                </a>
                 </div>
    )
}

const styles = {
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

export default UserInfo;