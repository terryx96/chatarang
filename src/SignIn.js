import React, {Component} from 'react';
import {auth, googleProvider} from './base';

class SignIn extends Component {
    state = {
        displayName: "",
        uid: "",
        email: "",
    }

    handleChange = (ev) => {
        this.setState({displayName: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.signIn({
            uid: this.state.uid,
            displayName: this.state.email,
            email: this.state.email,
        });
    }

    authenticate = () => {
        auth
            .signInWithPopup(googleProvider)
            .then(
                response => {
                    this.props.signIn(response.user)
                }
            )
            
    }

    render() {
         return(
            <div className = "SignIn" style = {styles.backdrop}>
                <div style = {styles.overlay}>
                <div style = {styles.inside}>Sign into Chatarang</div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input 
                        style = {styles.input}
                        type = "email"
                        placeholder = "email"
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        autoFocus
                        />
                    </div>
                    <div style = {styles.inside}></div>
                    <div>
                        <input
                        style = {styles.input}
                        type = "password"
                        placeholder = "password"
                        />
                    </div>
                    <button 
                    type = "submit" 
                    style = {styles.buttonElement}
                    onClick = {this.props.onClick}
                    >
                    Log in</button>

                    <br/>
                    or
                    <br/>
                    <button
                        style = {styles.buttonElement}
                        type = "button"
                        onClick = {this.authenticate}
                    >
                    Sign in with Google
                    </button>

                </form>
                </div>
            </div>
        )
    }
}

const styles = {
    backdrop:{
        backgroundColor: "black",
        zIndex: 0,
        width: "100%",
        height: "100%",
        display: "flex",
    },
    overlay: {
        borderRadius: "1.5rem",
        textAlign: "center",
        backgroundColor: "white",
        width: "400px",
        height: "400px",
        position: "fixed",
        top: "50%",
        left: "50%",
        marginTop: "-200px",
        marginLeft: "-200px",
        boxShadow: "10px 5px 50px gray, -10px -5px 50px gray",
        zIndex: 1,
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
        backgroundColor: "#550055",
        color: "white",
        marginTop: "20px",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginBottom: "20px",
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
        borderTopLeftRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem",
        border: "1px solid white",
    },
    
}

export default SignIn;