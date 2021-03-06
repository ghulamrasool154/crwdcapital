import React, { useEffect } from 'react'
import './progress.scss'

const Porgressbar = (props) => {



    return (
        <>

            <div className="progress-skill-bar ">
                <div className="skill-bar-content">
                    <span className="skill-title">{props.title}</span>
                </div>
                <div className="skill-bar">
                    <div className="skill-track wow animate__slideInLeft" style={{ width: `${props.value}%` }}>
                        <div className="number-percentage-wrapper">
                            <span className="number-percentage loaded" >{props.value}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Porgressbar