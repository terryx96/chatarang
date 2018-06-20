import React from 'react';
import Avatar from './Avatar';
import Metadata from './Metadata'
import {StyleSheet, css} from 'aphrodite';

const Message = (props) => {
    return (
        <div className = {`Message ${css(styles.message)}`}>
            <Avatar user = {props.user}/>
            <div className ={css(styles.details)}>
            <Metadata message = {props.message} />
            <div className = "body">{props.message.body}</div>
            <button
                className = {css(styles.reactionButton)}>
            <i className="far fa-smile"></i>
            </button>
            </div>
        </div>
    ) 
}

const styles = StyleSheet.create({
    //whole message block
    message: {
        display: "flex",
        marginTop: "1rem",
        padding: "0 1rem",
    },
    reactionButton: {
        border: 0,
        outline: 0,
        backgroundColor: 'transparent',
        padding: 0,
        fontSize: '1rem',
        color: '#ccc',
        cursor: 'pointer',
        postion: 'absolute',
        top: '0.5rem',
        right: '0.5rem',

        ':hover':{
            color: '#0000FF',
        }
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


})

export default Message;