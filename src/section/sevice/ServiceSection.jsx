import React from 'react'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Servicebox from '../../abstructComponents/servicebox/Servicebox'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import { Services } from '../../api/Services'
import './service.scss'

const ServiceSection = () => {
    return (
        <section className='OurServices'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-7  m-auto">
                        <Iconwidget text='Our Services' />
                        <Titlediscription title='Our Latest Technology & ' span='Interesting Features' para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus." />

                    </div>
                </div>
                <div className="row gy-4 gx-4 ">

                    {
                        Services.map((value) => {
                            return <Servicebox key={value.id} title={value.title} disc={value.disc} icon={value.icon} />
                        })
                    }



                </div>
            </div>
        </section>

    )
}

export default ServiceSection