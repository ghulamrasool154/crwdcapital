import React from 'react'
import './faq.scss'
import Titlebar from '../../abstructComponents/titlebar/Titlebar'
import Faq from '../../section/Faq/Faq'
import Accordion from '../../abstructComponents/accodrion/Accordion'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Button from '../../abstructComponents/button/Button'
import BlogSection from '../../section/blog/BlogSection'
import Newlatter from '../../abstructComponents/newlatter/Newlatter'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'

const FAQ = () => {
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
                            <Accordion />
                        </div>
                        <div className="col-lg-6  col-md-6 col-sm-12">
                            <Accordion />

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

                                    <Button title='Contact Us' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <BlogSection />

                <Newlatter />
            </div>
        </>
    )
}

export default FAQ