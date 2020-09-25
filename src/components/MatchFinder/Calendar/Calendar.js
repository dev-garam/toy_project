import React, { useState } from 'react'
import ReactCalendar from 'react-calendar'
import './Calendar.scss'

const Calendar = (props) => {
    const [date, setDate] = useState(null)

    const handleChange = (date) => {
        setDate(date)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setRange(date)
    }

    return (
        <div className="calendar">
            <ReactCalendar
                className="react-calendar"
                onChange={handleChange}
                selectRange={true}
            />
            <button className="calender-button" onClick={handleSubmit}>
                검색
            </button>
        </div>
    )
}

export default Calendar
