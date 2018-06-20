import React, {Component} from 'react';
import Avatar from './Avatar';
import Metadata from './Metadata'
import {StyleSheet, css} from 'aphrodite';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';


class Message extends Component {
    state = {
        showPicker: false,
        reactions: [],
    }

    handleEmojiSelect = (emoji) => {
        console.log(emoji);
        this.togglePicker();
    }

    togglePicker = () => {
        this.setState({showPicker: !this.state.showPicker});
    }

    render(){
        return (
            <div className = {`Message ${css(styles.message)}`}>
                <Avatar user = {this.props.user}/>
                <div className ={css(styles.details)}>
                    <Metadata message = {this.props.message} />
                    <div className = "body">{this.props.message.body}</div>
                    <button
                        className={`reactionButton ${css(styles.reactionButton)}`}
                        onClick = {this.togglePicker}>
                    <i className="far fa-smile"></i>
                    </button>
                </div>
                {
                    this.state.showPicker && 
                    <Picker
                        showPreview = {false} 
                        style={pickerStyles}
                        onSelect = {this.handleEmojiSelect}
                    />
                }
            </div>
        )
    }
}

const styles = StyleSheet.create({
    //whole message block
    message: {
        display: "flex",
        marginTop: "1rem",
        padding: '1rem',
        transition: 'backgroundColor .2s',
        padding: '1rem 1rem',
        position: 'relative',

        ':hover':{
            backgroundColor: '#f6f6f6',
        }
    },
    reactionButton: {
        border: 0,
        outline: 0,
        backgroundColor: 'transparent',
        padding: 0,
        fontSize: '1rem',
        color: '#ccc',
        cursor: 'pointer',
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        transition: 'color .25s',

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

const pickerStyles = {
    position: 'absolute',
    top: '4rem',
    right: '2rem',
}

export default Message;