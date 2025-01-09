//Master Function Library
//Updated 1/9/2025 @ 10:00 AM Pacific

//Get Today's Date
function getTodaysDate() {
    const today = new Date(); 
    const year = today.getFullYear(); 
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0'); 

    return `${year}-${month}-${day}`; 
}

//Get Tomorrow's Date
function getTomorrowsDate() {
    const today = new Date(); 
    const tomorrow = new Date(today); 
    tomorrow.setDate(today.getDate() + 1); 

       const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const tomorrow = getTomorrowsDate();
const today = getTodaysDate();
const now = new Date();

//Convert Unix UTC Milliseconds to MM-DD-YYYY
function convertUnixToDate(unixMilliseconds) {
    const date = new Date(unixMilliseconds); // Convert milliseconds to Date object
    const day = String(date.getUTCDate()).padStart(2, '0'); // Get day and pad with leading zero
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Get month (0-based) and pad with leading zero
    const year = date.getUTCFullYear(); // Get year

    return `${month}/${day}/${year}`;
}

//Calculate Days
function calculateDaysBetweenDates(date1,date2) {

  if (date1 && date2) {
    const unixTime1 = new Date(date1).getTime();
    const unixTime2 = new Date(date2).getTime();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const differenceInMilliseconds = Math.abs(unixTime1 - unixTime2);

    // Calculate the number of days and add 1 to offset the day count
    const daysBetween = Math.floor(differenceInMilliseconds / millisecondsPerDay) + 1;
    return daysBetween;
  }
}

//Convert yyyy-mm-dd to mm-dd-yyyy
function convertDateFormat(dateString) {
    // Split the input string by the hyphen
    const [year, day, month] = dateString.split('-');

    // Rearrange the components to mm-dd-yyyy
    return `${month}/${day}/${year}`;
}
    
// Convert Phone Number
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, "");
    const areaCode = cleaned.slice(0, 3);
    const firstPart = cleaned.slice(3, 6);
    const secondPart = cleaned.slice(6, 10);

    return `(${areaCode}) ${firstPart}-${secondPart}`;
}

//Convert Price
function decimalConvert(number) {
    return number.toFixed(2);
}

//String to Int
function stringToInteger(str) {
    const integer = parseInt(str, 10);
    return integer;
}

//Sort Units
function sortEntriesDescending() {
    const list = document.getElementById("entryList");
    const entries = Array.from(list.querySelectorAll("[data-date]"));
    entries.sort((a, b) => {
        const dateA = parseInt(a.getAttribute("data-date"), 10);
        const dateB = parseInt(b.getAttribute("data-date"), 10);
        return dateB - dateA;
    });

    entries.forEach(entry => list.appendChild(entry));
}

//Format phone
function formatPhone(phoneNumber) {
    // Use a regular expression to remove all non-numeric characters
    return phoneNumber.replace(/\D/g, '');
}

//
