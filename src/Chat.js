import React, {Component} from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
class Chat extends Component {
    constructor(){
        super();
        this.state = {
            messages: [
                {
                    id: 1,
                    userName: 'tWade',
                    body: 'Chatting up a storm, dawg',
                },
                {
                    id: 2,
                    userName: 'kKling',
                    body: 'Yeah you is, b',
                },
            ],
        }
    }
    render(){
        return (
            <div className = "Chat" style = {styles.chat}>
                <ChatHeader />
                <MessageList messages = {this.state.messages}/>
                <MessageForm addMessage = {this.addMessage}/>
            </div>
        )
    }

    addMessage = (body) => {
        const messages = [...this.state.messages];
        messages.push({
            id: Date.now(),
            userName: this.props.user.userName,
            body,
        });
        this.setState({messages});
    }

}

const styles = {
    chat: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    }
}

export default Chat