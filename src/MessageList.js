import React from 'react';

import Message from './Message';
const MessageList = (props) => {
    
    return (
        <div className = "MessageList" style = {styles.messageList}>
            <div style = {styles.roomAnnouncement}>
                <h3 style = {styles.h3}>#{props.roomName}</h3>
                <p>This is the very beginning of the #{props.roomName} room.</p>
            </div>
            {props.messages.map(msg => 
            <Message key = {msg.id} message = {msg} user = {props.user}/>
            )}
        </div>
    )
}

const styles = {
    messageList: {
        backgroundColor: "white",
        flex: 1,
        paddingBottom: "1rem",
        overflowY: "scroll",
    },
    roomAnnouncement:{
        padding: "2rem 1rem",
    },
    h3: {
        fontSize: "1.5rem",
    },
}

export default MessageList;