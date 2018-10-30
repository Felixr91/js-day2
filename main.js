//Solve the following problems using Conditionals

//1. Write a function that takes 2 parameters and displays the larger
function largerNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

largerNum(4, 298);

//2. Write a function that will take in a number (1-100) return the letter grade for the student score
function grade(score) {
  if (score < 55) {
    return "F"
  } else if (score >= 55 && score < 65) {
    return "D"
  } else if (score >= 65 && score < 75) {
    return "C"
  } else if (score >= 75 && score < 85) {
    return "B"
  } else {
    return "A"
  }
}

grade(75);

//3. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (over 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function fever(temp) {
  if (temp < 98.6) {
    return "No fever";
  } else if (temp > 98.6 && temp <= 103) {
    return "Fever!"
  } else {
    return "Go to the hospital!"
  }
}

fever(154)

//4. Write a function that takes in a car object, if it is not moving then return true
let mycar = {
  make: "Ford",
  model: "Mustang",
  color: "Red",
  moving: false
}

function isStopped(car) {
  if (car.moving == false) {
    return true;
  }
}

isStopped(mycar);

//5. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
  yourDish: true,
  isDirty: true
}

function washDish(dish) {
  if (dish.yourDish == true && dish.isDirty == true) {
    return true;
  } else {
    return false;
  }
}

washDish(dish);

//6. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
  from: 'BOI',
  to: 'LAX',
  prices: {
    standard: 500,
    firstClass: 2200
  }
}, {
  from: 'BOI',
  to: 'SEA',
  prices: {
    standard: 800,
    firstClass: 1200
  }
}, {
  from: 'BOI',
  to: 'CAN',
  prices: {
    standard: 750,
    firstClass: 6200
  }
}]

//With find prototype

function flightCost(destination, firstClass) {
  var go = flights.find(function (element) {
    return element.to == destination;
  });
  if (firstClass) {
    return go.prices.firstClass
  } else {
    return go.prices.standard
  }
}

//With a for loop

function flightCost(destination, firstClass) {
  for (var i = 0; i < flights.length; i++) {
    if (destination == flights[i].to) {
      if (firstClass == true) {
        return flights[i].prices.firstClass;
      } else {
        return flights[i].prices.standard;
      }
    }
  }
}



// 7. Given a number 1-7 return the corresponding day of the week.


let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday']

function dayOfWeek(n) {
  if (n > -1 && n < daysOfTheWeek.length) {
    return daysOfTheWeek[n];
  }
  return "invalid day"
}

// MY CODE: allow a secondary argument to change the first day of the week to monday

let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday']


function getDayOfWeek(n, offsetForMon) {
  var output = " ";
  if (offsetForMon == false && n > -1 && n < daysOfTheWeek.length) {
    return daysOfTheWeek[n - 1];
  } if (offsetForMon == true && n > -1 && n < daysOfTheWeek.length) {
    daysOfTheWeek.push(daysOfTheWeek.shift());
    output = daysOfTheWeek[n - 1];
    daysOfTheWeek.unshift(daysOfTheWeek.pop());
    return output;
  }
}

//MARK SUGGESTION!!!!! If you place the array within the function it will revert back to its original state. MUCH BETTER!
function getDayOfWeek(n, offsetForMon) {
  let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday'];
  var output = " ";
  if (offsetForMon == false && n > -1 && n < daysOfTheWeek.length) {
    return daysOfTheWeek[n - 1];
  } if (offsetForMon == true && n > -1 && n < daysOfTheWeek.length) {
    daysOfTheWeek.push(daysOfTheWeek.shift());
    output = daysOfTheWeek[n - 1];
    return output;
  }
}







/*
DO NOT MODIFY
test.largerNum = largerNum
test.grade = grade
test.fever = fever
test.isStopped = isStopped
test.washDish = washDish
test.flightCost = flightCost
test.getDayOfWeek = getDayOfWeek
*/