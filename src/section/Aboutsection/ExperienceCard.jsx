import React, { useEffect, useState } from 'react'

import { BsCheck, BsFillAwardFill } from "react-icons/bs"
import experinceicon from '../../assets/images/experinceicon.PNG'
const ExperienceCard = (props) => {

    const { label, number, duration } = props.data

    const [count, setCount] = useState("0")

    useEffect(() => {
        let start = 0;
        const end = parseInt(number.substring(0, 3))
        if (start === end) return;
        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / end) * 1000;
        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.substring(3))
            if (start === end) clearInterval(timer)
        }, incrementTime);

    }, [number, duration]);
    return (
        <>

            <span className='icon'> <img src={experinceicon} alt="exprience icon" /></span>
            <h2>{count} <span>+</span> </h2>
            <p>{label}</p>

        </>
    )
}

export default ExperienceCard