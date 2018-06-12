import React from 'react';

const Message = (props) => {
    return (
        <div className = "Message" style = {styles.message}>
            <span style = {styles.details}>
            {props.message.userName}: {props.message.body}
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
    }

}

export default Message;