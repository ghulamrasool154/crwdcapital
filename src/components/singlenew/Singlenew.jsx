import React, { useEffect, useState } from 'react'
import './Singlenew.scss'
import { BsClock, BsPersonCircle } from "react-icons/bs";

import img1 from '../../assets/images/111.jpg'
import img2 from '../../assets/images/222.jpg'

import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsLinkedin } from "react-icons/bs";
import Button from '../../abstructComponents/button/Button';
import Sidebar from '../../abstructComponents/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { Posts } from '../../api/Posts';
import Inputfield from '../../abstructComponents/inputfiled/Inputfield';
import { Link } from 'react-router-dom'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic';
const Singlenew = () => {

    const { id } = useParams();
    const [singlepost, setSinglepost] = useState(null);

    useEffect(() => {
        let blog = Posts.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setSinglepost(blog)
        } else {
            console.log('SorryData No Recived ');
        }
    });



    return (
        <>

            {
                singlepost ? <TitleDynmic title={singlepost.name} /> : ''
            }

            <section className='Singlenew'>
                <div className="container">
                    <div className="row">

                        {
                            singlepost ? <><div className="col-lg-8 col-md-7 col-sm-12">
                                <h1 className='title'>{singlepost.name}</h1>


                                <div className="aboutuserdetails">
                                    <span className="icon">
                                        {/* <BsPersonCircle /> */}
                                        <i aria-hidden="true" className="jki jki-user-circle-solid"></i>
                                        <span className='title'>
                                            John Doe</span>
                                    </span>
                                    <span className="icon">
                                        <i aria-hidden="true" className="jki jki-clock"></i>
                                        <span className='title'>September 7, 2021
                                        </span>
                                    </span>
                                </div>
                                <div className="posterimg">
                                    <img src={singlepost.img} alt="two-businessmen-giving-warm-welcome-trust-teamwork-agreement-to-each-other-concept" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                                </p>

                                <h5>
                                    How We Do A Concert In Pandemic
                                </h5>

                                <div className='Pandemic'>
                                    <div className='cover cover1'>
                                        <img src={img1} alt="" className='w-100' />
                                    </div>

                                    <div className='cover'>
                                        <img src={img2} alt="" className='w-100' />
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                                </p>

                                <div className="tagsandshare">
                                    <div className='title'>
                                        <b>Tags :
                                            <a href='#' target="" className='tags'>
                                                Digital bank</a>,
                                            <a href='#' target="" className='tags'>
                                                New</a>
                                        </b>
                                    </div>
                                    <div className='share'>
                                        <b>Share This : </b>
                                        <a href="https://www.facebook.com/" target=" _blank" rel="noopener noreferrer">
                                            <span className='icon'>
                                                <i className='fab fa-facebook-f'></i>
                                                {/* <BsFacebook /> */}

                                            </span>
                                        </a>
                                        {/* <a href="https://www.instagram.com/" target=" _blank" rel="noopener noreferrer">
                                            <span className='icon'><BsInstagram /> </span>
                                        </a> */}
                                        <a href="https://www.twitter.com/" target=" _blank" rel="noopener noreferrer">

                                            <span className='icon'><BsTwitter /> </span></a>
                                        <a href="https://www.pinterest.com/" target=" _blank" rel="noopener noreferrer">

                                            <span className='icon'>
                                                <i className="fab fa-pinterest-p"></i>
                                                {/* <BsPinterest /> */}
                                            </span></a>

                                        <a href="https://www.linkedin.com/" target=" _blank" rel="noopener noreferrer">

                                            <span className='icon'>
                                                <i className='fab fa-linkedin-in'></i>
                                                {/* <BsLinkedin />  */}
                                            </span></a>

                                    </div>
                                </div>

                                <hr className='line' />


                                <form className='from' onSubmit={(event) => event.preventDefault()}>
                                    <h2 className="comment-reply-title">Leave a Reply
                                    </h2>
                                    <p>Your email address will not be published. </p>
                                    <h5>Comment</h5>

                                    <textarea className='comment'></textarea>

                                    <div className='inputFormDiv' style={{ width: '100%' }}>
                                        <label htmlFor="">Name <span>*</span></label>
                                        <Inputfield type='text' name='Name' cName='Name' />
                                    </div>

                                    <div className='inputFormDiv' style={{ width: '100%' }}>
                                        <label htmlFor="">Email <span>*</span></label>
                                        <Inputfield type='email' name='email' cName='email' />
                                    </div>

                                    <div className='inputFormDiv' style={{ width: '100%' }}>
                                        <label htmlFor="">Website <span>*</span></label>
                                        <Inputfield type='text' name='Website' cName='Website' />
                                    </div>


                                    <p className='checkboxfiled'>
                                        <input type="checkbox" />Save my name, email, and website in this browser for the next time I comment.</p>




                                    <input type="submit" value="Post Comment" className='submit' />

                                </form>
                            </div></> : ''
                        }

                        <div className="col-lg-4  col-md-5 col-sm-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>

            </section>

        </>

    )
}

export default Singlenew