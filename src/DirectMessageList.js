import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import Room from './Room';
import RoomForm from './RoomForm'
import {Route, Switch, Link} from 'react-router-dom';
import DirectMessageForm from './DirectMessageForm';

class DirectMessageList extends Component {

     render(){   
        const rooms = this.props.rooms.filter(room => room.dm);
        return(
            <Switch>
                <Route 
                    path = '/rooms/new-direct-message' 
                    render = {
                        (navProps) => (
                            <DirectMessageForm user = {this.props.user} users = {this.props.users} addRoom = {this.props.addRoom} 
                            {...navProps}
                            />
                        )
                    }
                />
                <Route 
                    render = {
                        () => (
                            <nav className={`RoomList ${css(styles.nav)}`} >
                                <div className = {`${css(styles.heading)}`}>
                                    <h2>Direct Messages</h2>
                                    <Link
                                    className = {`${css(styles.button)}`}
                                    to = "/rooms/new-direct-message"
                                    >
                                    <i className="fas fa-plus"></i></Link>
                                </div>
                                <ul>
                                    {
                                        Object.keys(rooms).map(
                                            r => (
                                                <Room key = {r} room = {this.props.rooms[r]} />
                                            )
                
                                        )
                                    }
                                </ul>
                            </nav>
                        )
                    }
                    />
            </Switch>
        );

        
        
    }

    }


const styles = StyleSheet.create({
    nav: {
      padding: '0 1rem',
    },
  
    h2: {
      fontSize: '1rem',
    },
  
    list: {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
    },
  
    heading: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    button: {
      border: 0,
      backgroundColor: 'transparent',
      outline: 0,
      padding: 0,
      fontSize: '1rem',
      color: 'rgba(255,255,255, 0.4)',
      cursor: 'pointer',
      transition: 'color 0.25s ease-out',
  
      ':hover': {
        color: 'white',
      }
    },
  })
export default DirectMessageList;