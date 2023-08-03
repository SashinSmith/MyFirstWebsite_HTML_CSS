var dateObject = new Date();
var date;
var dateCells;
var numDays;
var dayOfWeek;
var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var year = dateObject.getFullYear;
var curMonth = monthArr[dateObject.getMonth()];
var dayOfWeek = dateObject.getDay();
dateObject.setDate(1);
if (curMonth === 0 || curMonth === 2 || curMonth === 4 || curMonth === 6 || curMonth === 7 || curMonth === 9 || curMonth === 11) {
    numDays = 31;
} else if (curMonth === 1) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                numDays = 29;
            } else {
                numDays = 28
            }
        } else {
            numDays = 29;
        }
    } else {
        numDays = 28;
    }
} else {
    numDays = 30;
}
dateCells = document.getElementsByTagName("td");
for (var i = 0; i < dateCells.length; i++) {
    dateCells[i].innerHTML = "";
}

for (var i = dayOfWeek; i < numDays + dayOfWeek; i++) {
    dateCells[i].innerHTML = dateObject.getDate();
    date = dateObject.getDate() + 1;
    dateObject.setDate(date);
}

document.getElementById("monthCap").innerHTML = curMonth;