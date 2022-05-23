import React from 'react'

import './teamcard.scss'

const Teamcard = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">

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
                        <div className='socilicon '>
                            <a href="http://www.facebook.com" className='icon ' target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="http://www.twitter.com" className='icon ' target="_blank" rel="noopener noreferrer" >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className='icon '>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Teamcard