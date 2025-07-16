// Calendar.js
import { BiChevronLeft, BiChevronDown, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../src/Calendar.css"

function Calendar({ days, tasks }) {
  const navigate = useNavigate();

  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const weekdays = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate(); //  returns the day of the month for this date according to local time.
  const daysArray = Array.from({ length: daysInMonth}, (_,i) => i + 1 ); // generates an array representing the days in a month.

  const isToday = (day) => {
    return (day === today.getDate() && month === today.getMonth() && year === today.getFullYear());
  };

  const handleDayClick = (day) => {
    const dateString = formatDateString(year, month, day)
    navigate(`/tasks/${dateString}`)
  };

  const weekdaySpans = weekdays.map((day) => <span key={day}>{day}</span>)

  const formatDateString = (year, month, day) => {
    const monthString = (month + 1).toString().padStart(2, '0');
    const dayString = day.toString().padStart(2, '0')
    return `${year}-${monthString}-${dayString}`
  }

  const daySpans = daysArray.map((day) => {
    const dateString = formatDateString(year, month, day);
    const hasTasks = tasks?.some(task => task.date === dateString)

    return (
      <span 
        key={day} 
        className={`day ${isToday(day) ? "today" : ""}`}
        onClick={() => handleDayClick(day)}
        >
        <div 
          className="day-number">
            {day}
            {hasTasks && <div className="task-dot"/>}
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