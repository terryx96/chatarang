import React from 'react';
import Time from './Time';
import Avatar from './Avatar';
import Metadata from './Metadata'
const Message = (props) => {
    return (
        <div className = "Message" style = {styles.message}>
            <span style = {styles.details}>
            <span><Avatar user = {props.user}/></span>
            <Metadata message = {props.message} />
            <div style = {styles.user}>{props.message.displayName} 1:31 PM</div>
            <div>{props.message.body}</div>
            </span>
        </div>
    )
}

const styles = {
    //whole message block
    message: {
        display: "flex",
        marginTop: "1rem",
        padding: "0 1rem",
    },
    //text in the message
    details: {
        flex: 1,
        paddingLeft: "0.5rem",
    },
    metaData:{
        display: "flex",
        alighnItems: "baseline",
    },
    user:{
        fontWeight: "bold",
        marginRight: "0.5rem",
    },
    time:{
        color: "#999",
        fontSize: "0.8rem",
    }


}

export default Message;