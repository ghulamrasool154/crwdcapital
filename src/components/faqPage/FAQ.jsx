import React from 'react'
import './faqpage.scss'
import Titlebar from '../../abstructComponents/titlebar/Titlebar'
import Faq from '../../section/Faq/Faq'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Button from '../../abstructComponents/button/Button'
import Newlatter from '../../abstructComponents/newlatter/Newlatter'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'
import { Posts } from '../../api/Posts';
import PostSection from '../../abstructComponents/post/PostSection'
import { Link } from 'react-router-dom'

const FAQ = () => {
    const slicingpost = Posts.slice(0, 3);
    return (
        <>
            <TitleDynmic title='FAQ' />

            <div className='FAQ'>

                <Titlebar title='Frequently ' span='Asked Question' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />

                <Faq />
                {/*  */}


                <div className="container paymentmenthod">

                    <div className="row">
                        <div className="col-12 text-center m-auto">
                            <div className="titlebarsize">

                                <Titlediscription title='Payment ' span='Question' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="accordion" id="accordionExample5">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEX1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEX1" aria-expanded="false" aria-controls="collapseEX1">
                                            How to Invest My Money using crwdcapital Online ?
                                        </button>
                                    </h2>
                                    <div id="collapseEX1" className="accordion-collapse collapse show" aria-labelledby="headingEX1" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* eigth */}

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEx2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEx2" aria-expanded="false" aria-controls="collapseEx2">
                                            How to Invest My Money using crwdcapital Online ?
                                        </button>
                                    </h2>
                                    <div id="collapseEx2" className="accordion-collapse collapse" aria-labelledby="headingEx2" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* nine */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEx3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEx3" aria-expanded="false" aria-controls="collapseEx3">
                                            How to Invest My Money using crwdcapital Online ?
                                        </button>
                                    </h2>
                                    <div id="collapseEx3" className="accordion-collapse collapse" aria-labelledby="headingEx3" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6  col-md-6 col-sm-12">
                            <div className="accordion" id="accordionExample2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            How to Invest My Money using crwdcapital Online ?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* eigth */}

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEigt">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEigt" aria-expanded="false" aria-controls="collapseEigt">
                                            How to Invest My Money using crwdcapital Online ?
                                        </button>
                                    </h2>
                                    <div id="collapseEigt" className="accordion-collapse collapse" aria-labelledby="headingEigt" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">

                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* nine */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingNine">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                            How to Invest My Money using crwdcapital Online ?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
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
                                <div className="col-12 text-center m-auto">

                                    <div className="titlebarsize">

                                        <Iconwidget text='Contact Us' />
                                        <Titlediscription title="Get Better Knowledge & Info" span="About Our Product" para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus." />
                                    </div>


                                    <Link to='/contactus'>
                                        <Button title='Contact Us' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='news and blog'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center m-auto headingcustom">
                                <div className="titlebarsize">

                                    <Iconwidget text='Our News' />
                                    <Titlediscription title='News ' span='& Article' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.' />
                                </div>
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
                                <Link to='#'>
                                    <Button title='View More' />
                                </Link>
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