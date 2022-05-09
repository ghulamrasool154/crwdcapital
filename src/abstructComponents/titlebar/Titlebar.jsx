import React from 'react'
import './titlebar.scss'
const Titlebar = (props) => {
    return (
        <div className='Titlebar'>
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1 className='title'>{props.title} <span>{props.span}</span></h1>
                            <p className='para'>{props.para}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Titlebar