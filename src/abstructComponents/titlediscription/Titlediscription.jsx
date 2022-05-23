import React from 'react'
import './Titlediscription.scss'
const Titlediscription = (props) => {
    return (
        <div className='Titlediscription'>

            <h2 className='title'>
                {props.title} <br /><span>{props.span}</span>
            </h2>
            <p className='para'>
                {props.para}
            </p>
        </div>
    )
}

export default Titlediscription