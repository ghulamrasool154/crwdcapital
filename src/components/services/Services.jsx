import React from 'react'
import Button from '../../abstructComponents/button/Button'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import Newlatter from '../../abstructComponents/newlatter/Newlatter'
import PostSection from '../../abstructComponents/post/PostSection'
import Titlebar from '../../abstructComponents/titlebar/Titlebar'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'
import { Posts } from '../../api/Posts'
import Clinetreview from '../../section/clinetreviews/Clinetreview'
import FinancialNeeds from '../../section/FinancialNeeds/FinancialNeeds'
import ServiceSection from '../../section/sevice/ServiceSection'
import Whychooseus from '../../section/WhyChooseUs/Whychooseus'
import { Link } from 'react-router-dom'
const Services = () => {
  const slicingpost = Posts.slice(0, 3);
  return (

    <>
      <TitleDynmic title='Services ' />

      <div className="Services">
        <Titlebar title='Our' span="Service" para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />
        <FinancialNeeds />
        <ServiceSection />
        <Clinetreview />
        <Whychooseus />
        {/* <BlogSection /> */}
        <section className='news and blog'>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center m-auto headingcustom">
                <Iconwidget text='Our News' />
                <Titlediscription title='News ' span='& Article' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.' />
              </div>
            </div>

            <div className="row py-4">

              {
                slicingpost.map((value) => {
                  return <PostSection key={value.id} value={value} />
                })
              }
            </div>
            <div className="row">
              <div className="col-lg-12 text-center m-auto">
                <Link to='#'>
                  <Button title='View More' />
                </Link>
              </div>
            </div>
          </div>

        </section>
        <Newlatter />
      </div>
    </>
  )
}

export default Services