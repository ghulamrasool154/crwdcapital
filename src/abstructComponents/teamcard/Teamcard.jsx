import React from 'react'

import './teamcard.scss'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Teamcard = (props) => {
    return (
        <>
            <div className="col-lg-4">

                <div className="teamcart">
                    <div className="fortend">

                        <div className="imagesectio">
                            <img src={props.value.img} alt="" className='w-100 img-fluid' />
                        </div>
                        <div className="profile-card">
                            <div className='layout'>
                                <h2 className='title'> {props.value.name} </h2>
                                <p className='jobtitle'>{props.value.d} </p>
                            </div>
                        </div>

                    </div>
                    <div className="backend">
                        <div className='socilicon'>
                            <span className='icon'><BsFacebook /></span>
                            <span className='icon'><BsTwitter /></span>
                            <span className='icon'><BsInstagram /></span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Teamcard