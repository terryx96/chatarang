import React from 'react';

//this is a stateless functional componenet
const ChatHeader = (props) => {
        return (
            <div className = "ChatHeader" style = {styles.chatHeader}>
                <div className="roomInfo">
                    <h2 style = {styles.h2}>#{props.roomName.displayName}</h2>
                    <p style = {styles.p}>{props.roomName.description}</p>
                </div>
                <button style = {styles.button} onClick = {() => props.removeRoom(props.roomName)}>
                <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        )
}

const styles = {
    chatHeader: {
        backgroundColor: "#f3f3f3",
        borderBottom: "1px solid #ccc",
        height: "3rem",
        padding: "0 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    h2: {
        fontSize: "1.1rem",
        margin: 0,
    },
    p: {
        color: "#999",
        margin: 0,
        fontSize: "0.8rem",
    },

    button: {
        border: 0,
        outline: 0,
        backgroundColor: 'transparent',
        fontSize: '1rem',
        cursor: 'pointer',
        color: 'rgba(0,0,0,.3)',
        
    }






}

export default ChatHeader;