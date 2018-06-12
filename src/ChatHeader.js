import React from 'react';

//this is a stateless functional componenet
const ChatHeader = () => {
        return (
            <div className = "ChatHeader">
                <div className="roomInfo">
                    <h2>#general</h2>
                    <p>Announcements and general chat</p>
                </div>
            </div>
        )
}

export default ChatHeader;