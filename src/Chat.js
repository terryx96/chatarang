import React, {Component} from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import base from './base';

let id = 0;

class Chat extends Component {
    constructor(){
        super();
        this.state = {
            messages: [
            ],
        }
    }

    componentDidMount(){
        base.syncState(this.props.roomName, {
            context: this,
            state: "messages",
            asArray: true,
        });
        //this.setState({messages: []})
    }

    componentDidUpdate(prevProps){
        if(prevProps!=this.props){
        base.syncState(this.props.roomName, {
            context: this,
            state: "messages",
            asArray: true,
        });
        
    }
    }

    render(){
        return (
            <div className = "Chat" style = {styles.chat}>
                <ChatHeader roomName = {this.props.roomName} />
                <MessageList messages = {this.state.messages} user = {this.props.user} roomName = {this.props.roomName}/>
                <MessageForm addMessage = {this.addMessage} deleteMessage = {this.clear}/>
            </div>
        )
    }

    addMessage = (body) => {
        const messages = [...this.state.messages];
        messages.push({
            id: ++id,
            userName: this.props.user.userName,
            email: 'terry.wade@valpo.edu',
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