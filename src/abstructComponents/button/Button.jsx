import React from 'react'
import './button.scss'
const Button = (props) => {
    return (
        <span className='custombutton'>
            <button className='button'>{props.title}</button>

        </span>
    )
}

export default Button