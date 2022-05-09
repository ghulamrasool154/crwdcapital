import React from 'react'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Teamcard from '../../abstructComponents/teamcard/Teamcard'
import Titlebar from '../../abstructComponents/titlebar/Titlebar'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import './Teams.scss'

import { Teamsss } from '../../api/Teamsss'
import Clinetreview from '../../section/clinetreviews/Clinetreview'
import Faq from '../../section/Faq/Faq'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'
const Teams = () => {
    return (
        <>
            <TitleDynmic title='Teams' />
            <div className='team'>
                <Titlebar title='Our' span='Teams' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />
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
                                Teamsss.map((value) => { return <Teamcard key={value.id} value={value} /> })
                            }

                        </div>
                    </div>
                </section>

                <Clinetreview />
                <Faq />

            </div>
        </>

    )
}

export default Teams