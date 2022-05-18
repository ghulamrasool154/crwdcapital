import React from 'react'
import './aboutsection.scss'

import company from '../../assets/images/about.PNG'

import { BsCheck, BsFillAwardFill } from "react-icons/bs"
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import Button from '../../abstructComponents/button/Button'

import ExperData from '../../components/propssdata/ExperData.json';
import ExperienceCard from './ExperienceCard'
import { Link } from 'react-router-dom'
const Aboutsection = () => {
    console.log('ExperData', ExperData);


    return (
        <>
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

                                <Link to="#">
                                    <Button title='About Us' />
                                </Link>
                                {/* <button className='btn'>About Us</button> */}
                            </div>
                        </div >
                    </div >
                </div >
            </section >
        </>
    )
}

export default Aboutsection