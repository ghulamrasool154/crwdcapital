import React from 'react'
import './Compunies.scss'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
const Compunies = () => {
    return (
        <section className='compunies'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-12 ">
                        <div className='imagediv'>
                            <img src={image1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-12">
                        <div className='imagediv'>
                            <img src={image2} alt="" />
                        </div>

                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-12">
                        <div className='imagediv'>
                            <img src={image3} alt="" />
                        </div>

                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-12">
                        <div className='imagediv'>
                            <img src={image4} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Compunies