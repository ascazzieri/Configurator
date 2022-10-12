
import React, { useState, useEffect } from 'react'
import './DateTime.css'

export const DateTime = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
            <p className='date-color date-margin date-font'>{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
            

       
    )
}

export default DateTime
