import React from 'react'
import './button.scss'
const Button = (props) => {
    return (
        <span className='custombutton'>
            <span className='button'>{props.title}</span>
        </span>
    )
}

export default Button