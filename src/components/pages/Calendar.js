// Calendar.js
import { BiChevronLeft, BiChevronDown, BiChevronRight } from "react-icons/bi";

function Calendar() {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = 31;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0 = Jan, 7 = July
  const currentDate = today.getDate();

  const displayYear = 2025;
  const displayMonth = 6;

  const daysArray = Array.from({ length: daysInMonth}, (_,i) => i + 1 );

  const weekdaySpans = weekdays.map((day) => <span key={day}>{day}</span>)
  
  const daySpans = daysArray.map((day) => {
    const isToday = day === currentDate && displayMonth === currentMonth && displayYear === currentYear;
    return (<span key={day} className={isToday ? "today" : ""}>{day}</span>);
  });

  return (
    <div className="calendar">
      <h2 className="month">July</h2>
      <h2 className="year">2025</h2>
      <div className="nav-buttons">
        <button onClick={() => console.log("Left")}>
          <BiChevronLeft />
        </button>
        <button onClick={() => console.log("Present")}>
          <BiChevronDown />
        </button>
        <button onClick={() => console.log("Right")}>
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