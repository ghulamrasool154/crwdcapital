import React from 'react'
import './ContactUsBox.scss'
const ContactUsBox = (props) => {


  return (
    <>

      <div className='ContactUsBox'>
        <div className="ContactUsBoxInner">
          <div className="contact">
            <div className="icon-sec">
              <span className='icon'>{props.icon}</span>
            </div>

            <div className='contact-sec'>
              <h2>{props.title}</h2>
              <p>{props.para}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactUsBox