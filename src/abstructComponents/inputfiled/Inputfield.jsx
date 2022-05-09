import React from 'react'
import './inputfiled.scss'
const Inputfield = (props) => {
    return (
        <>

            <input
                type={props.type}
                name={props.name}
                className={`inputFiled ${props.cName}`}
                placeholder={props.placeholder}
            />
        </>
    )
}

export default Inputfield