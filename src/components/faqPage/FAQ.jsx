import React from 'react'
import './faq.scss'
import Titlebar from '../../abstructComponents/titlebar/Titlebar'
import Faq from '../../section/Faq/Faq'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Button from '../../abstructComponents/button/Button'
import BlogSection from '../../section/blog/BlogSection'
import Newlatter from '../../abstructComponents/newlatter/Newlatter'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'
import { Posts } from '../../api/Posts';
import PostSection from '../../abstructComponents/post/PostSection'
import { NavLink } from 'react-router-dom'

const FAQ = () => {
    const slicingpost = Posts.slice(0, 3);
    return (
        <>
            <TitleDynmic title='FAQ' />

            <div className='FAQ'>

                <Titlebar title='Frequently ' span='Asked Question' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />

                <Faq />

                <div className="container paymentmenthod">

                    <div className="row">
                        <div className="col-lg-6 text-center m-auto">
                            <Titlediscription title='Payment ' span='Question' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="true" aria-controls="collapseseven">
                                            How to Register Online in The DOQU App ?
                                        </button>
                                    </h2>
                                    <div id="collapseseven" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            How to Top-Up The DOQU E-Wallet Online ?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNin" aria-expanded="true" aria-controls="collapseNin">
                                            How to Register Online in The DOQU App ?
                                        </button>
                                    </h2>
                                    <div id="collapseNin" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-6 col-sm-12">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            How to Register Online in The DOQU App ?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How to Top-Up The DOQU E-Wallet Online ?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            How to Invest My Money using DOQU Online ?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className='getstated'>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 text-center m-auto">

                                    <Iconwidget text='Contact Us' />
                                    <Titlediscription title="Get Better Knowledge & Info" span="About Our Product" para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus." />


                                    <NavLink to='/contactus'>
                                        <Button title='Contact Us' />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='news and blog'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center m-auto headingcustom">
                                <Iconwidget text='Our News' />
                                <Titlediscription title='News ' span='& Article' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.' />
                            </div>
                        </div>

                        <div className="row py-4">

                            {
                                slicingpost.map((value) => {
                                    return <PostSection key={value.id} value={value} />
                                })
                            }
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center m-auto">
                                <NavLink to='/crwdworld/news'>
                                    <Button title='View More' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>

                <Newlatter />
            </div>
        </>
    )
}

export default FAQ