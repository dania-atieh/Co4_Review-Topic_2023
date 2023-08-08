//do while example:
var x = 1
do {
  console.log(x)
  
  if(x === 1)
  continue;
  console.log("Dania")
} 
while (x > 10)



//*********************** */
//for in example: 
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

console.log(txt)
//*********************************** */
//switch example:
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day)


