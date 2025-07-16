// Calendar.js
import { BiChevronLeft, BiChevronDown, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../src/Calendar.css"

function Calendar({ days }) {
  const navigate = useNavigate();

  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const weekdays = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "Decemeber"
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate(); //  returns the day of the month for this date according to local time.
  const daysArray = Array.from({ length: daysInMonth}, (_,i) => i + 1 ); // generates an array representing the days in a month.

  const isToday = (day) => {
    return (day === today.getDate() && month === today.getMonth() && year === today.getFullYear());
  };

  const handleDayClick = (day) => {
    // convert month and day to two-digit strings
    const monthNumber = month + 1;
    const monthString = monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`;

    const dayString = day < 10 ? `0${day}` : `${day}`;

    // create the date string
    const dateString = `${year}-${monthString}-${dayString}`;
    

    navigate(`/tasks/${dateString}`)
  };

  const weekdaySpans = weekdays.map((day) => <span key={day}>{day}</span>)

  const daySpans = daysArray.map((day) => {

    return (
      <span 
        key={day} 
        className={`day ${isToday(day) ? "today" : ""}`}
        onClick={() => handleDayClick(day)}
        >
        <div 
          className="day-number">
            {day}
        </div>
      </span>);
  });

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  return (
    <div className="calendar">
      <h2 className="month">{monthNames[month]}</h2>
      <h2 className="year">{year}</h2>
      <div className="nav-buttons">
        <button onClick={prevMonth}>
          <BiChevronLeft />
        </button>
        <button onClick={() => {
          setMonth(today.getMonth());
          setYear(today.getFullYear());
          }}>
          <BiChevronDown />
        </button>
        <button onClick={nextMonth}>
          <BiChevronRight />
        </button>
      </div>
      <div>
        <h2 className="weekdays">{weekdaySpans}</h2>
        <div className="days">{daySpans}</div>
      </div>
    </div>
  )
}

export default Calendar;