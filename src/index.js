module.exports = function toReadable (number) {
    let units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let dozens10to20 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let dozens20to100 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    if (number >=0 && number < 10){
       return units[number];
    } 
    if (number >= 10 && number < 20){    
       return dozens10to20[number%10];
    }
    if (number >= 20 && number < 100){
       let dozen = dozens20to100[Math.floor(number/10)];
       let unit = units[number%10];
       if (unit === "zero"){
         return dozen;
       } else {
         return dozen + " " + unit;
       }
    }
    if (number >= 100 && number < 1000){
       let hundred = units[Math.floor(number/100)] + " hundred";
       let dozen = (Math.floor(number/10))%10;
       let unit = " " + units[number%10];
       if (dozen === 0) {
         dozen = "";
       } else if (dozen < 2) {
         dozen = " " + dozens10to20[number%10];
         unit = " zero";
       } else {
         dozen = " " +  dozens20to100[dozen];
       }
       if (unit === " zero") {
         return hundred + dozen;
       } else {
         return hundred + dozen +  unit;
       }
    }
 }
