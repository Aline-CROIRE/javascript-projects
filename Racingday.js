let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 20;

if (runnerAge >= 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly === true) {
  console.log(`Race number ${raceNumber}. Your race time is 9:30 am.`);
} else if (runnerAge >= 18 && registeredEarly === false) {
  console.log(`Race number ${raceNumber}. Your race time is 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Race number ${raceNumber}. Your race time is 12:30 pm.`);
} else {
  console.log('Please seek registration desk!');
}