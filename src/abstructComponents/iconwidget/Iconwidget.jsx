import React from 'react'
import './iconwidget.scss'

const Iconwidget = ({ text }) => {
    return (
        <div className='IconwidgetBOX' >
            <div className="Iconwidget">
                <span className='icon'><i className="far fa-dot-circle"></i></span>
                <span className='text'> {text}</span>
            </div>
        </div>
    )
}

export default Iconwidget