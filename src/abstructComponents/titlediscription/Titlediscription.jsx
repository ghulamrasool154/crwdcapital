import React from 'react'
import './Titlediscription.scss'
const Titlediscription = (props) => {
    return (
        <span className='Titlediscription'>

            <h1 className='title'>
                {props.title} <br /><span>{props.span}</span>
            </h1>
            <p className='para'>
                {props.para}
            </p>
        </span>
    )
}

export default Titlediscription