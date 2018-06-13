import React from 'react';
import RoomList from './RoomList';

import Avatar from './Avatar';
import SignOut from './SignOut'
const UserInfo = ({user, signOut}) => {
    return (
            <div className="UserInfo" style = {styles.children}>
                <Avatar user = {user} email = "terry.wade@valpo.edu"/>
                <span className="user">{user.userName} </span>
                <SignOut signOut = {signOut} />
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