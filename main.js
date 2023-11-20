function getNumber() {
    return Math.floor(Math.random() * 1000);
}

var raceNumber = 0;
var earlyRegistration = true;
var runnerAge = 16;

if (runnerAge > 18 && earlyRegistration) {
    raceNumber = getNumber() + 1000;
} else {
    raceNumber = getNumber();
}

if (runnerAge > 18 && earlyRegistration) {
    console.log(`Your race time is 9:30 AM. Your race number is ${raceNumber}.`)
} else if (runnerAge > 18 && earlyRegistration == false) {
    console.log(`Your race time is 11:00 AM. Your race number is ${raceNumber}`)
} else {
    console.log(`Your race time is 12:30 PM. Your race number is ${raceNumber}`)
}
