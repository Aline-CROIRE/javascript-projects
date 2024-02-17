//declaring variable myAge
let myAge=21;
//declaring variable earlyYears
earlyYears=2;
//using multiplication assignment operator
earlyYears*=10.5;
/*Since we already accounted for the first two years, lets take the myAge variable, and subtract 2 from it.*/
laterYears=myAge-2;
//multiplying laterYears by 4 using multiplication assignment operator
laterYears*=4;
console.log(earlyYears);
console.log(laterYears);
//adding early years and later Years to get my age in Dog years
myAgeInDogYears=earlyYears + laterYears;
//writing my name and returning it as lower case 
myName="ALINE".toLowerCase();
//Displaying my name and age
console.log(`My name is ${myName}.I am ${earlyYears}old in human years which is ${laterYears} years old in dog years`);


