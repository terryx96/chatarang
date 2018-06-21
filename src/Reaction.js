import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {Emoji} from 'emoji-mart';

const Reaction = ({message, emoji, addReaction}) => {
    return(
        <button onClick = {() => addReaction(message, emoji)} className = {css(styles.button)}>
            <Emoji emoji = {emoji} size = {16} />
            <span className = {css(styles.count)}>
                {message.reactions[emoji].length}
            </span>
        </button>
    )
}

const styles = StyleSheet.create({
    button: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #eee',
      outline: 0,
      borderRadius: '8px',
      padding: '0.125rem 0.25rem',
      marginRight: '0.25rem',
      color: '#999',
      cursor: 'pointer',
      marginBottom: '.25rem',
  
      ':hover': {
        backgroundColor: '#3399ff33',
        border: '1px solid #3399ff',
        color: '#3399ff',
      },
    },
  
    count: {
      marginLeft: '0.25rem',
      fontSize: '0.6rem',
    },
  })

export default Reaction;