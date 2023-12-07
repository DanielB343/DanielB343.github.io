"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Porject
   
   Author:  Daniel Baker
   Date:   12/4/2023
   
   Filename: cb_script.js
  */

/* Adds a alretbox that wleocmes the user while showing the current changes of a the current update */
window.alert("Welcome to Catter Breeds. \n Version: 0.2.1 \n - Changes to the navagation menu to make it look less big. \n - Remove the forms and legal page snice those didin't fit with the website. \n - Change the contact us page to a survey about your cat experiences."); 

/* Execute the function to run and display the countdown clock and current day and time */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdownand normal clock */
function runClock() {
	/* Store the current date and time */
	var currentDay= new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();
	
	/* Display the current date and time */
	document.getElementById("dateToday").innerHTML = 
	dateStr + "<br />" + timeStr;
	
	/* Calculates the days until the website update by converting the text string of the update date into 
	a number that is part of  the daysLeft equation which turns it to a number*/
	var nextUpdate = new Date("February 31, 2024");
	var daysLeft = (nextUpdate - currentDay)/(1000*60*60*24);
	
	/* Ueses math methods to calculate the hours left until the website update */
	var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
	
	/* Ueses math methods to calculate the minutes and seconds left until the website update */
	var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
	var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
	
	/* Ueses math methods to display the time before the website update  */
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
}