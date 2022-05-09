import React from 'react'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Porgressbar from '../../abstructComponents/progressbar/Porgressbar'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import bgperson from '../../assets/images/bg peros.jpg'
import './Whychooseus.scss'

const Whychooseus = () => {
    return (
        <section className='WhyChooseUs'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0 position-relative">
                        <img src={bgperson} alt="" className='w-100 h-100' />


                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="contextside">
                            <Iconwidget text='Why Choose Us' />
                            <Titlediscription title='We Commit To Give You The' span='Best Experience' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco laboris nisi ut aliquip ex ea commodo' />

                            <div className='progressbarsection'>
                                <Porgressbar title="Customer Support" value="90" />
                                <Porgressbar title="Client Satisfaction" value="88" />
                                <Porgressbar title="App Safety" value="85" />
                            </div>
                            <button className='btn'>Free Consultation</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whychooseus