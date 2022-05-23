import React from 'react'
import './button.scss'
const Button = (props) => {
    return (
        <div className='custombutton'>
            <span className='button'>{props.title}</span>
        </div>
    )
}

export default Button