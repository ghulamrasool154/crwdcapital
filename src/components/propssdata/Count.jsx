
import React, { useEffect, useState } from 'react';

import './Count.scss';

const Count = props => {
    const { label, number, duration, sign } = props.data

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

            <div className="content">
                <h2 ><span className='value'>{count} </span> {sign}</h2>
                <b>{label}</b>
            </div>
        </>
    );
}

export default Count;