import React, {Component} from 'react';

class SignIn extends Component {
    state = {
        name: "",
    }

    handleChange = (ev) => {
        this.setState({name: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.signIn(this.state.name);
    }

    render() {
         return(
            <div className = "SignIn" style = {styles.overlay}>
                <div style = {styles.inside}>Sign into Chatarang</div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input 
                        style = {styles.input}
                        type = "text"
                        placeholder = "Username"
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        />
                    </div>
                    <div style = {styles.inside}></div>
                    <div>
                        <input
                        style = {styles.input}
                        type = "password"
                        placeholder = "Password"
                        />
                    </div>
                    <button 
                    type = "submit" 
                    style = {styles.buttonElement}
                    onClick = {this.props.onClick}
                    >
                    Log in</button>
                </form>
            </div>
        )
    }
}

const styles = {
    overlay: {
        textAlign: "center",
        backgroundColor: "white",
        width: "400px",
        height: "400px",
        position: "fixed",
        top: "50%",
        left: "50%",
        marginTop: "-200px",
        marginLeft: "-200px",
        outline: "1px solid rgba(100,100,100, 0.8)",
        boxShadow: "10px 5px 50px gray, -10px -5px 50px gray",
    },
    inside: {
        paddingTop: "20px",
        paddingBottom: "10px",
        fontSize: "23px",
    },
    input: {
        marginTop: "20px",
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
        borderTopLeftRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem",
        
    },
    buttonElement: {
        fontSize: "1.5rem",
        backgroundColor: "#1A8FE3",
        color: "white",
        marginTop: "20px",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
        borderTopLeftRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem",
        border: "1px solid white"
    },
    
}

export default SignIn;