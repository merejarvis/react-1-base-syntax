import React from 'react'
import './UserOutput.css'

export const UserOutput = (props) => {
    return (
    <div className="output">
    <p> 
    {props.content} - {props.userName}
    </p>

    </div>
    )
}

