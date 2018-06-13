import React from 'react'

const Metadata = (props) => {
    return (
        <div class="Metadata">
              <div class="user">{props.message.user}</div>
              <div class="time">1:10 PM</div>
            </div>
    )
}

export default Metadata;