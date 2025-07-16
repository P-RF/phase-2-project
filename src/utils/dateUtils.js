  //dateUtils.js

  export const formatDateString = (year, month, day) => { // formats the given year, month, and day into a string "YYY-MM-DD"
    const monthString = (month + 1).toString().padStart(2, '0'); // month is always two digits
    const dayString = day.toString().padStart(2, '0') // day is always two digits
    return `${year}-${monthString}-${dayString}` 
  };

