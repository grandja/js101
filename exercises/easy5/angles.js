function dms (angle) {
  let degrees = parseInt(angle, 10);
  let remainder = angle % 1;

  // 60 minutes per degree
  // 60 seconds per minute
  let minutes = parseInt(remainder * 60);
  let seconds = parseInt(((remainder * 60) % 1) * 60);

  minutes = padZeros(minutes);
  seconds = padZeros(seconds);

  // Format degrees, minutes, seconds
  console.log(`${degrees}\u00B0${minutes}'${seconds}"`);

}

function padZeros(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

// Tests
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

/* Solution
const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}
*/