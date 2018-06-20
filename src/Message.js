import React from 'react';
import Avatar from './Avatar';
import Metadata from './Metadata'
const Message = (props) => {
    return (
        <div className = "Message" style = {styles.message}>
            <Avatar user = {props.user}/>
            <div className = "details" style = {styles.details}>
            <Metadata message = {props.message} />
            <div className = "body">{props.message.body}</div>
            </div>
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