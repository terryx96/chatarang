import React from 'react'

const Metadata = (props) => {
    return (
        <div className="Metadata">
              <div className="user">{props.message.displayName}</div>
              <div className="time">1:10 PM</div>
            </div>
    )
}

export default Metadata;