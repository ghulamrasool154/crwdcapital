import React from 'react'
import { Link } from 'react-router-dom'
import './logo.scss'
const Logo = () => {
    return (
        <Link className="lightfont logoname" to="/">
            {/* <img src={logowhite} alt="" /> */}
            crwd<span className='boldfont'>capital</span>
        </Link>
    )
}

export default Logo