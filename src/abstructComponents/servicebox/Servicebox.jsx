import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import './servicesbox.scss'
import { Link } from 'react-router-dom';
const Servicebox = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className='servicesbox'>
                    <div className="icon">
                        {props.icon}
                    </div>
                    <div className="box-body">
                        <h1 className="title">{props.title} </h1>
                        <p className="description">{props.disc}</p>
                    </div>
                    <Link to='/services'>     <p className="icon-box-btn">Learn more <span><BsArrowRightShort /></span></p></Link>
                </div>
            </div>
        </>
    )
}

export default Servicebox