import React, {Component} from 'react';

class MessageForm extends Component {

    state = {
        body: '',
    }


    handleSubmit = (ev) =>{
        ev.preventDefault();
         this.props.addMessage(this.state.body);
         //this.props.getMessage(this.state.body)
        this.setState({body: ""});
    }

    handleChange = (ev) => {
        this.setState({body: ev.target.value });
    }

    render(){
        return (
            <form 
            className = "MessageForm"
            onSubmit = {this.handleSubmit}>
                <input 
                    required
                    type = "text" 
                    name = "body" 
                    placeholder = "message..."
                    value = {this.state.body} 
                    onChange = {this.handleChange}
                    autoFocus
                    />
                <button type = "submit">           
                 <i className="far fa-paper-plane" title="Send"></i>
                </button>
            </form>
        )
    }

}

export default MessageForm;