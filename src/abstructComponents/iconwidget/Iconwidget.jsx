import React from 'react'
import './iconwidget.scss'
import { BsRecordCircle } from "react-icons/bs";

const Iconwidget = ({ text }) => {
    return (
        <div className='IconwidgetBOX' >
            <div className="Iconwidget">
                <span><BsRecordCircle /></span>
                <span className='text'> {text}</span>
            </div>
        </div>
    )
}

export default Iconwidget