import React from 'react'
import './aboutus.scss'
import { BsCheck, BsFillAwardFill } from "react-icons/bs"

import Titlebar from '../../abstructComponents/titlebar/Titlebar'
import Aboutsection from '../../section/Aboutsection/Aboutsection'
import FinancialNeeds from '../../section/FinancialNeeds/FinancialNeeds'
import Whychooseus from '../../section/WhyChooseUs/Whychooseus'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Teamcard from '../../abstructComponents/teamcard/Teamcard'
import Clinetreview from '../../section/clinetreviews/Clinetreview'

import { Teamsss } from '../../api/Teamsss'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'
import ExperienceCard from '../../section/Aboutsection/ExperienceCard'
import company from '../../assets/images/about.PNG'
import ExperData from '../../components/propssdata/ExperData.json';
import signature from '../../assets/images/signature.png'
const Aboutus = () => {




    const shorrrr = Teamsss.slice(0, 3)


    return (

        <>

            <TitleDynmic title='About Us' />


            <section className='aboutus'>

                <Titlebar title='About' span='Us' para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
                <section className='aboutcompany'>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 leftside">
                                <div className="about">
                                    <img src={company} alt="" className='w-100' />

                                    <div className='boxexperience' >
                                        {
                                            ExperData.counts.map((value) => {
                                                return < ExperienceCard key={value.id} data={value} />
                                            }
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='rightside'>
                                    <Iconwidget text='About Us' />

                                    <Titlediscription title="Let's Makes Your Finance Activity" span="Going Digitalize" para=' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.' />

                                    <ul className='list'>
                                        <li> <span><BsCheck /></span>Good Interface</li>
                                        <li> <span><BsCheck /></span>Safety Payment</li>
                                        <li><span><BsCheck /></span>Bunch Of Feature</li>
                                        <li><span><BsCheck /></span>Customer Support</li>
                                    </ul>

                                    <div className='signaturesection'>
                                        <div className="inner">
                                            <div className='img'>
                                                <img src={signature} alt="" className='img-fluid' />
                                            </div>
                                            <div className="context">
                                                <h1>George Shaw
                                                </h1>
                                                <p>Crwd Capical CEO</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <button className='btn'>About Us</button> */}
                                </div>
                            </div >
                        </div >
                    </div >
                </section >
                {/* <Aboutsection /> */}
                <FinancialNeeds />
                <Whychooseus />
                <Clinetreview />

                <section className='OurTeams'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center m-auto">
                                <Iconwidget text='Our Teams' />
                                <Titlediscription title='Our Expert ' span='Teams' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />

                            </div>
                        </div>
                        <div className="row">

                            {
                                shorrrr.map((value) => { return <Teamcard key={value.id} value={value} /> })
                            }

                        </div>
                    </div>
                </section>




            </section>
        </>
    )
}

export default Aboutus