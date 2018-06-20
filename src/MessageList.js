import React, {Component} from 'react';

import Message from './Message';
class MessageList extends Component {
    componentDidUpdate(prevProps){
        if(prevProps.messages.length < this.props.messages.length){
            this.scrollToBottom();
        }

    }

    scrollToBottom = () => {
        this.messageEnd.scrollIntoView({behavior: 'smooth'});
    }

    render(){
        return (
            <div className = "MessageList" style = {styles.messageList}>
                <div style = {styles.roomAnnouncement}>
                    <h3 style = {styles.h3}>#{this.props.roomName.dm
                                                ? this.props.roomName.displayName
                                                : this.props.roomName.name} </h3>
                    <p>This is the very beginning of the #{this.props.roomName.dm
                                                ? this.props.roomName.displayName
                                                : this.props.roomName.name} room.</p>
                </div>
                {this.props.messages.map(msg => 
                <Message key = {msg.id} message = {msg} user = {this.props.user}/>
                )}
                <div ref = {el => this.messageEnd = el}></div>
            </div>
    )
}
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