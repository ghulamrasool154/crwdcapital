import React, { useState } from 'react'
import './aboutus.scss'

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

const Aboutus = () => {


    const [shortteam, setshorteam] = useState(Teamsss);


    const shorrrr = shortteam.slice(0, 3)


    return (

        <>

            <TitleDynmic title='About Us' />


            <section className='aboutus'>

                <Titlebar title='About' span='Us' para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
                <Aboutsection />
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