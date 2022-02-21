//Main function
function displayTime() {
  //Declaring variables

  //Declaring "now" variable which creates a new object with the current date and time
  let now = new Date();
  //Current date
  let day = now.getDay();
  let daynum = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  //Real time
  let hrs = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  let per = document.getElementById("period");
  //Declaring two arrays for day-name & month-name specifications
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //Conditions to allow the clock function properly and improve it visually
  if (hrs >= 12) {
    per = "PM";
  } else {
    per = "AM";
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs == 0) {
    hrs = 12;
  }
  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (daynum == 1) {
    daynum = "1st of";
  } else if (daynum == 2) {
    daynum = "2nd of";
  } else if (daynum == 3) {
    daynum = "3rd of";
  } else if (daynum == 21) {
    daynum = "21st of";
  } else if (daynum == 22) {
    daynum = "22nd of";
  } else if (daynum == 23) {
    daynum = "23rd of";
  } else if (daynum == 31) {
    daynum = "31st of";
  } else {
    daynum = daynum + "th of";
  }

  //Inserting the current-date and real-time values to their corresponding html values
  document.getElementById("day").innerHTML = daylist[day];
  document.getElementById("day-number").innerHTML = daynum;
  document.getElementById("month").innerHTML = months[month];
  document.getElementById("year").innerHTML = year;
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = secs;
  document.getElementById("period").innerHTML = per;
}

//The setInterval method performs the "displayTime" function repeatedly every 1 second
setInterval(displayTime, 1000);
