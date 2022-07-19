// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// const returnFirstTwoDrivers = (drivers) => {
//     const newDriversArr = [...drivers.splice(-2)];
 
//     console.log(newDriversArr);
//    return newDriversArr;
// }
// returnFirstTwoDrivers();
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
   
function createFareMultiplier(intFare) {
             return function fareMultiplier() {
                return intFare * 5;
        }
    }
const fareDoubler = function(fareMultiplier) {
        return fareMultiplier * 2;
}
const fareTripler = function(fareMultiplier) {
    return fareMultiplier * 3;
}
// function selectDifferentDrivers(drivers, selectingDrivers) {
//     if (selectingDrivers === returnFirstTwoDrivers) {
//         return returnFirstTwoDrivers;
//      } else {
//             return returnLastTwoDrivers;
//         }
        
    //  }
    const selectDifferentDrivers = (drivers, selectedDrivers) => selectedDrivers(drivers);
   