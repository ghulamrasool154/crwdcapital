import React from 'react'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Testimonialsilder from '../../abstructComponents/testimonialslider/Testimonialsilder'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import './ClientReview.scss'
const Clinetreview = () => {
    return (
        <section className='ClientReview'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center m-auto">
                        <div className="titlebarsize">
                            <Iconwidget text='Client Review' />
                            <Titlediscription title='What Our Client Says About ' span='Our Service' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />
                        </div>

                    </div>
                </div>
                <div className="row slider py-3">
                    <Testimonialsilder />

                </div>
            </div>
        </section>
    )
}

export default Clinetreview