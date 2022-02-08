import React from 'react'
import { AiOutlineAudioMuted } from 'react-icons/ai';

function UserBox() {
    return (
        <div className="box">
            <AiOutlineAudioMuted className="muteIcon" />
            <h1 className="userIcon">A</h1>
            <p className="userName">Abdirahman Abdirashid Ahmed</p>
        </div>
    )
}

export default UserBox
