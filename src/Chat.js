import React, {Component} from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import base from './base';

class Chat extends Component {
    constructor(){
        super();
        this.state = {
            messages: [
            ],
            binding: null,
        }
    }

    componentDidMount(){
        this.syncMessages();
    }

    componentDidUpdate(prevProps){
        if(prevProps.roomName.name!==this.props.roomName.name){
            this.syncMessages();
        }
    }

    syncMessages = () =>{
        //if were syncing with something else { stop it }
        if(this.state.binding){
            base.removeBinding(this.state.binding);
        }
        const binding = base.syncState(`${this.props.roomName.name}/messages/`, {
            context: this,
            state: "messages",
            asArray: true,
        });

        this.setState({binding});
    }

    render(){
        return (
            <div className = "Chat" style = {styles.chat}>
                <ChatHeader removeRoom = {this.props.removeRoom} rooms = {this.props.rooms} roomName = {this.props.roomName} />
                <MessageList messages = {this.state.messages} user = {this.props.user} roomName = {this.props.roomName}/>
                <MessageForm addMessage = {this.addMessage} deleteMessage = {this.clear}/>
            </div>
        )
    }

    addMessage = (body) => {
        const messages = [...this.state.messages];
        messages.push({
            id: `${Date.now()}`,
            displayName: this.props.user.displayName,
            email: this.props.user.email,
            body,
            createdAt: Date.now(),
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