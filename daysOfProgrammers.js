 // for the Russian Calendar
 function dayOfProgrammer(year) {
  const yearWhenChangeCalendar = 1918
  const isGregorian = year >= yearWhenChangeCalendar
  const isLeap = isGregorian 
    ? (year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0 
    : year % 4 === 0 // is Julian calendar
  const thisYearChangeCalendar = year === yearWhenChangeCalendar
  let februaryDays = isLeap ? 29 : 28
  if(thisYearChangeCalendar) {
      februaryDays -= 13
  }
  
  const restOfMonths = 215
  const devDay = 256
  
  const formatDay = devDay-restOfMonths-februaryDays
  const formatMonth = '09'
  
  return `${formatDay}.${formatMonth}.${year}`
}