/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 7
   Tutorial Case
   Porject
   
   Author:  Daniel Baker
   Date:   12/6/2023
   
   Filename: cb_surveysubmint.js

*/

/* This show a alret when the submint button is press and the system find invalid data in the survey. */
window.onload = function() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
      return false;
   };
};