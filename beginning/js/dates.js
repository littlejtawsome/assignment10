//STEP 1
// let d = new Date();
// console.log(d.getDate());


//STEP 2
// // Get month name (0 - 11) 0 = Jan ,1 = Feb,....
// let d = new Date();
// let monthNum = d.getMonth();

// function getMonthName(monthNum){
//     'use strict';
//     var monthNames = ["Jan", "Feb",  "Mar",  "April",  "May",  "Jun",  "Jul",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec",];
//     return monthNames[monthNum];
// }

// console.log(getMonthName(monthNum));


//STEP 3 
// // (between 0-6) 0 = Sunday 1 = Monday 2 = Tuesday 3 = Wednesday 4 = Thursday 5 = Friday 6 = Saturday............
// let d = new Date();
// let dayNum = d.getDay();

// function getdayName(dayNum){
//        dayNames = ["0 = Sunday","1 = Monday","2 = Tuesday","3 = Wednesday","4 = Thursday","5 = Friday","6 = Saturday"];
//        return dayNames[dayNum];
// }
// console.log(getdayName(dayNum));



//STEP 4 NONOONONONONONONONONONONONONONONONONL
// let d = new Date();
// var yesterDay = d.getDay() - 1;
// function getdayName(yesterDay){
//     "use strict";
//        var dayNames = ["Sunday"," Monday"," Tuesday","Wednesday","Thursday"," Friday"," Saturday"];
//        return dayNames[yesterDay];
// }  
// console.log(getdayName(yesterDay));


//// try 2
// let d = new Date();
// let dayNum = d.getDay();
// let yesterDay = d.getDay() - 1 ;
// function getdayName(dayNum){
//        dayNames = ["0 = Sunday","1 = Monday","2 = Tuesday","3 = Wednesday","4 = Thursday","5 = Friday","6 = Saturday"];
//        return dayNames[dayNum];
// }
// console.log(getdayName(dayNum));
// console.log(getdayName(dayNum)- getdayName(dayNum -1));
// console.log(getdayName(dayNum - 1));

////try3
// trish4
// let dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

// let now = new Date();
// document.write(dayNames[now.getDay()==0?6:now.getDay()-1] );


// let date = new Date()
// let today = date.getDay() +1; 
// switch (today) {  
//     case 1: today = 'Sunday'; break;
//     case 2: today = 'Monday'; break;
//     case 3: today = 'Tuesday'; break;
//     case 4: today = 'Wednesday'; break;
//     case 5: today = 'Thursday'; break;
//     case 6: today = 'Friday'; break;
//     case 7: today = 'Saturday'; break;

//     default: break;
// }
// console.log(today.charAt(0));



//STEP 5 NONONOONONONONONONONONONONOONONONONONONNOONONONONO

// let d = new Date();
// let dayNum = d.getDay();
// let dayNames ;
// function getdayName(dayNum){
//     "use strict";
    
//       dayNames = ["Sunday"," Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//         // dayNames = (string.subster(0));
//        return dayNames[dayNum];

// }
// console.log(dayNames.slice(0) );


