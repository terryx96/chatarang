import React, {Component} from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

let id = 0;

class Chat extends Component {
    constructor(){
        super();
        this.state = {
            messages: [
                {
                    id: ++id,
                    userName: 'Navy Davey',
                    body: 'Yo, party at Fretless HQ. Alex will be there, how bout you?',
                },
                {
                    id: ++id,
                    userName: 'Terry',
                    body: 'Maybe man, I got stuff to do.',
                },
            ],
        }
    }
    render(){
        return (
            <div className = "Chat" style = {styles.chat}>
                <ChatHeader />
                <MessageList messages = {this.state.messages}/>
                <MessageForm addMessage = {this.addMessage} deleteMessage = {this.clear}/>
            </div>
        )
    }

    addMessage = (body) => {
        const messages = [...this.state.messages];
        messages.push({
            id: ++id,
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