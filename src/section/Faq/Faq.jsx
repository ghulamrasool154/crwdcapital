import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../../abstructComponents/accodrion/Accordion'
import Button from '../../abstructComponents/button/Button'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import faqimg from '../../assets/images/crwdfaq.png'

import './faqSection.scss'
const Faq = () => {
    return (
        <section className='faq'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className='leftside'>
                            <Iconwidget text="FAQ's" />
                            <Titlediscription title='Easy Way to Manage and Convert' span=" Your Income"
                                para="
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.
                    "/>

                            <Accordion />

                            <Link to='/services'>

                                <Button title='Learn More' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6  col-md-6  col-sm-12 righside">
                        <div className='imgbox'>
                            <img src={faqimg} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq