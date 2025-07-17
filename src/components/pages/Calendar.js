// Calendar.js
import React, { useContext, useState } from "react";
import { BiChevronLeft, BiChevronDown, BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { formatDateString } from "../utils/dateUtils";
import { TasksContext } from "../utils/tasksContext";
import "../../../src/Calendar.css"

function Calendar() {
  const { tasks } = useContext(TasksContext); // access values form 'TasksContext' using useContext -- no props

  const navigate = useNavigate(); // change the current route after clicking a specific date: from 'calendar' to 'tasks'

  const today = new Date(); // creates js object for date

  // Destructure parts of 'today'
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();


  const [year, setYear] = useState(todayYear); // initializes a state variable for the current year
  const [month, setMonth] = useState(todayMonth); // initializes a state variable for the current month

  const isToday = (day) => { // checks if the number/month/year passed matches the current day, month, and year (0 for Jan)
    return (day === todayDate && month === todayMonth && year === todayYear);
  };

  const weekdays = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate(); //  returns the day of the month for this date according to local time
  const daysArray = Array.from({ length: daysInMonth}, (_,i) => i + 1 ); // generates an array representing the days in a month

  const handleDayClick = (day) => {   // when user clicks on a day, user is taken to /task url for that date
    const dateString = formatDateString(year, month, day) // combines year, month, and day into a string
    navigate(`/tasks/${dateString}`)
  };

  // loops through weeksays array for each day and creates a span element for each 
  const weekdaySpans = weekdays.map((day) => <span key={day}>{day}</span>) 

  const daySpans = daysArray.map((day) => {     // current day
    const dateString = formatDateString(year, month, day);  // new variable (avoid repetition) - converts date to string ex: "2025-01-15"
    const hasTasks = tasks?.some(task => task.date === dateString)  // checks for a task on a day

    return (
      <span // when user clicks on a day, user navigates to tasks for the selected date
        key={day} 
        className={`day ${isToday(day) ? "today" : ""}`}
        onClick={() => handleDayClick(day)}
        >
        <div // if there is a task on a given day, it adds a dot
          className="day-number">   
            {day}
            {hasTasks && <div className="task-dot"/>}   
        </div>
      </span>);
  });

  const prevMonth = () => {       // calendar button movement - back
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1); // year change (adjust year according to month ahead: Jan 2025 <- Dec 2024)
    } else {
      setMonth((prev) => prev - 1); // month change
    }
  };

  const nextMonth = () => {     // calendar button movement - forward
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1); // year change (adjust year according to month ahead: Dec 2024 -> Jan 2025)
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