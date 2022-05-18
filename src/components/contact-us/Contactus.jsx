import React from 'react'
import './contactus.scss'
import Titlebar from '../../abstructComponents/titlebar/Titlebar'
import Inputfield from '../../abstructComponents/inputfiled/Inputfield'
import Button from '../../abstructComponents/button/Button'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import { BsGeoAlt, BsTelephone, BsEnvelopeFill, BsStopwatch } from "react-icons/bs";

import ContactUsBox from '../../abstructComponents/ContactUsBox/ContactUsBox'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'
import { NavLink } from 'react-router-dom'
const Contactus = () => {

    return (
        <>

            <TitleDynmic title='Contact Us' />

            <section className='Contactus'>


                <Titlebar title='Contact ' span='Us' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />



                <section className='getaquote'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <h1 className='leavemessage'>    Leave A Message </h1>
                                <form className='from' onSubmit={(evenet) => evenet.preventDefault()}>
                                    <div className='inputFormDiv'>
                                        <label htmlFor="">Name <span>*</span></label>
                                        <Inputfield type='text' name='Name' cName='name' placeholder='Your Name' />
                                    </div>
                                    <div className='inputFormDiv'>
                                        <label htmlFor="">Email <span>*</span></label>
                                        <Inputfield type='email' name='email' cName='email' placeholder='Your Email' />
                                    </div>
                                    <div className='inputFormDiv'>
                                        <label htmlFor="">Subject <span>*</span></label>
                                        <Inputfield type='text' name='Subject' cName='Subject' placeholder='Subject' />
                                    </div>
                                    <div className='inputFormDiv'>
                                        <label htmlFor="">Phone <span>*</span></label>
                                        <Inputfield type='number' name='number' cName='number' placeholder='Your Number' />
                                    </div>

                                    <div className='inputFormDiv' style={{ width: '100%' }}>
                                        <label htmlFor="">Message <span>*</span></label>
                                        <textarea name="Message" className='textareaField' placeholder='Message' ></textarea>
                                    </div>

                                    <NavLink to="##">
                                        <input type="submit" value="Send Message" className='submit' />
                                    </NavLink>
                                    {/* <Button title='send Message'></Button> */}
                                </form>

                            </div>
                            <div className="col-lg-6  col-md-12 col-sm-12 rightside">
                                <Iconwidget text='Contact Us' />
                                <Titlediscription title='Get Closer' span='With Us' para='Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore eiusmod tempor incididunt .' />

                                <div className='box-section'>
                                    <ContactUsBox icon={<BsGeoAlt />} title='Location' para='Puputan Renon, DPS' />
                                    <ContactUsBox icon={<BsStopwatch />} title='Opening Hours' para='09:00 AM - 20:00 PM' />
                                    <ContactUsBox icon={<BsTelephone />} title='Contact' para='+62 123-432-543' />
                                    <ContactUsBox icon={<BsEnvelopeFill />} title='Email' para='Doqubank@mail.com' />


                                </div>
                                <hr />

                                <div className="social-media">
                                    <div className="title">
                                        <h1>
                                            Social Media :
                                        </h1>
                                    </div>
                                    <div className="social-link">


                                        <span className='icon'>


                                            <a href="http://www.facebook.com"
                                                target="_blank"
                                                rel="noopener noreferrer">

                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </span>
                                        <span className='icon'>
                                            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">

                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </span>
                                        <span className='icon'>
                                            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-instagram"></i>
                                            </a>

                                        </span>
                                        <span className='icon'>
                                            <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">

                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <section className='googlemap'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9738720850914!2d115.21637131478418!3d-8.694030793753646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240e84514f455%3A0x2034e49436466c41!2sJl.%20Raya%20Sesetan%2C%20Kota%20Denpasar%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2s!4v1651833068229!5m2!1sen!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>)
}

export default Contactus