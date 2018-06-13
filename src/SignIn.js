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
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
        borderTopLeftRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem",
        border: "1px solid white"
    },
    
}

export default SignIn;