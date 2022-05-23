import React from 'react'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import './download.scss'
import doubleImgmobile from '../../assets/images/download1.png'
import playstore from '../../assets/images/app-store1.png'
import applystore from '../../assets/images/google-play-badge-e1630982322931.png'
const Download = () => {
    return (
        <section className='DownloadNow'>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className='downloadimg'>
                                <img src={doubleImgmobile} alt="download" className='w-100' />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 rightisde">
                            <Iconwidget text='Download Now' />
                            <Titlediscription title='Download and Register From ' span='GThe Mobile App' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.
' />

                            <div className='stores wow animate__fadeInUp'>
                                <div style={{ width: '140px', marginRight: '10px' }} className='img'>
                                    <img src={playstore} alt="apple store" className='w-100' />
                                </div>
                                <div style={{ width: '150px' }}>
                                    <img src={applystore} alt="playstore" className='w-100' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Download