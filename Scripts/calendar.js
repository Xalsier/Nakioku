// create a new date object for December 1, 2022
const date = new Date(2022, 11, 1);

// create a table element to hold the calendar
const calendarTable = document.createElement('table');

// center the calendar
calendarTable.style.margin = "0 auto";

// give the calendar a white border
calendarTable.style.border = "1px solid white";

// set the background color of the calendar to white and make it opaque
calendarTable.style.backgroundColor = "white";
calendarTable.style.opacity = "0.9";

// make the text inside the cells black
calendarTable.style.color = "black";

// make the calendar larger
calendarTable.style.fontSize = "20px";

// create a table row for the day names
const dayNamesRow = document.createElement('tr');

// create table cells for each day of the week
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
for (const dayName of dayNames) {
  const dayNameCell = document.createElement('td');
  dayNameCell.innerText = dayName;
  dayNamesRow.appendChild(dayNameCell);
}

// add the day names row to the calendar table
calendarTable.appendChild(dayNamesRow);

// create a table row for each week of the month
while (date.getMonth() === 11) {
  // create a new row for this week
  const weekRow = document.createElement('tr');

  // create a table cell for each day of the week
  for (let i = 0; i < 7; i++) {
    // create a new cell for this day
    const dayCell = document.createElement('td');

    // set the cell's inner text to the day of the month
    dayCell.innerText = date.
