import React from 'react'
import './box.scss'

const Box = (props) => {
    return (
        <>
            <div className='box'>
                <div className="context">
                    <div className="icons">
                        <div className='icon'>
                            {props.icon}
                        </div>
                    </div>
                    <div className="text">
                        <h1> {props.title}</h1>
                        <p>{props.para}</p>
                    </div>
                </div>
                <hr className='linebar' />
                <div className="bottom">

                    <div className='iconitem'>
                        <span className='listicon'>
                            {props.listicon1}
                        </span>

                        <span className='listicon'>
                            {props.listicon2}
                        </span>

                        <span className='listicon'>
                            {props.listicon3}
                        </span>

                        <span className='listicon'>
                            {props.listicon4}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box