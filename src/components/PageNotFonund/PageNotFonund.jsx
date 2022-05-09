import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../abstructComponents/button/Button'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'
import './PageNotFonund.scss'


const PageNotFonund = () => {
    return (
        <>
            <TitleDynmic title='Page Not Found' />

            <section className='PageNotFonund'>

                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center m-auto">
                                <Iconwidget text='404 Page' />
                                <h1 className='fourzerofour'>404</h1>
                                <Titlediscription title='Page' span='Not Found' para='Welcome to crwdworld, its a big place and crwdcapital has lots of exciting things to share too.  Click on the link below to get you back on your journey!for news I will connect you with Cosmin Another developer - when you get the link up with colors please let me know' />

                                <Link to='/'>
                                    <Button title='Back to Home' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default PageNotFonund