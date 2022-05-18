import React from 'react'
import './Testimonialsilder.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarsoulSlider from "react-slick";
import { TestimonialData } from '../../api/TestimonialData';

const Testimonialsilder = () => {


    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>

            <CarsoulSlider {...settings} >
                {
                    TestimonialData.map((value) => {
                        return <div key={value.id}>
                            <div className='TestimonialSlider'>
                                <div className="comment-content">
                                    <p>{value.disc}</p>
                                </div>
                                <div className="comment-bio">
                                    <div className="bio-details">
                                        <div className="profile-image">
                                            <img src={value.img} alt={value.name} /></div>
                                        <span className="profile-info">
                                            <strong className="profile-name">{value.name}</strong>
                                            <p className="profile-des">{value.Designation}</p>
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>


                            </div>
                        </div>
                    })
                }



            </CarsoulSlider>
        </>
    )
}

export default Testimonialsilder