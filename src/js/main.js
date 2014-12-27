var MILE_IN_KMS = 0.621371;

// Helpers
// function convertTimeToHHMM(time) {
//   var hrs = parseInt(Number(time));
//   var min = Math.round((Number(time) - hrs) * 60);
//   return hrs + ':' + min;
// }


function milesToKilometres(miles) {
  return miles * MILE_IN_KMS;
}

// Calculators

// speed = distance / time
function calcSpeed(distance, time) {
  return distance  / time;
}

function calcDistance(speed, time) {
  return speed * time;
}

function calcTime(distance, speed) {
  return distance / speed;
}

// pace = time(mins) / distance
function calcPace(distance, time) {
  var time = time / distance;
  return convertTimeToHHMM(time);
}