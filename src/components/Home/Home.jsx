import React, { useEffect, useState } from 'react'
import './home.scss'

import iphone from '../../assets/images/home-iphone12.png'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget';
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import Newlatter from '../../abstructComponents/newlatter/Newlatter'

import Aboutsection from '../../section/Aboutsection/Aboutsection'

import FinancialNeeds from '../../section/FinancialNeeds/FinancialNeeds'
import Whychooseus from '../../section/WhyChooseUs/Whychooseus'
import ServiceSection from '../../section/sevice/ServiceSection'
import Faq from '../../section/Faq/Faq'
import { Posts } from '../../api/Posts'
import PostSection from '../../abstructComponents/post/PostSection'
import Button from '../../abstructComponents/button/Button'
import Compunies from '../../section/compunies/Compunies'
import Download from '../../section/download/Download'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic';


import data from '../../components/propssdata/Data.json'
import Count from '../../components/propssdata/Count';

const Home = () => {


    const slicingpost = Posts.slice(0, 3);




    return (


        <>
            <TitleDynmic title='Home' />
            <div className='Home'>


                <section className='herosection'>
                    <div className='backgroundoverlay'>
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 forcontext">
                                    <div className="leftside">
                                        <Iconwidget text='Crwdcapital Digital Bank' />
                                        <div className="heading-section-title ">
                                            <Titlediscription title='The Only Professionals & ' span='Secure Digital Bank' para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />

                                        </div>
                                        <div className='count'>
                                            {data.counts.map(count => <Count
                                                key={count.id} data={count} />)}
                                            {
                                                data.counts.map((value) => {
                                                    <div className="content">
                                                        <h2><span className='value'>{value.number} </span> M</h2>
                                                        <b >Downloaded App</b>
                                                    </div>

                                                })
                                            }

                                        </div>


                                        <Button title='Learn More' />
                                        {/* <div className="learnmore">
                                            <button className='btn'>Learn More</button>
                                        </div> */}
                                    </div>

                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="rightside">
                                        <div className="image">
                                            <img src={iphone} alt="iphone" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* compunies logo section */}
                <Compunies />

                <FinancialNeeds />

                <Aboutsection />

                <Whychooseus />
                <ServiceSection />

                <Faq />
                <Download />

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
                                <Button title='View More' />
                            </div>
                        </div>
                    </div>

                </section>

                <Newlatter />




            </div >
        </>
    )
}

export default Home