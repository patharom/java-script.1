let date1 = new date();
console.log(date1);

let date2 = new date("10-12-2050")
console.log(date2);

let date3 = new date(2023 , 4)
console.log(date3);

let date4 = new date(2023 , 4 , 26)
console.log(date4);

let date5 = new date(2023 , 4 , 26 , 16)
console.log(date5);

let date6 = new date(2023 , 4 , 26 , 16 , 12)
console.log(date6);

let date7 = new date(2023 , 4 , 26 , 16 , 12 , 59)
console.log(date7);

let date8 = new date(120000)
console.log(date8);


/* JavaScript Date Formats */

/* ISO Date */

 {
   const dates = new Date("2024");
   console.log(dates);
 }

/* ShortDate */

 {
   const dates = new Date("03/25/2023");
   console.log(dates);
 }

/* LongDate */

 {
   const dates = new Date("march 23 2023");
   console.log(dates);
 }

 {
   const dates = new Date("23 march 2023");
   console.log(dates);
 }

/*  Date Input - Parsing Dates */

 {
   let msec = Date.parse("october 21, 2002");
   console.log(msec);
 }
