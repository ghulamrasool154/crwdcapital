import React from 'react'
import { NavLink } from 'react-router-dom'
import './logo.scss'
const Logo = () => {
    return (
        <NavLink className="lightfont logoname" to="/">
            {/* <img src={logowhite} alt="" /> */}
            crwd<span className='boldfont'>capital</span>
        </NavLink>
    )
}

export default Logo