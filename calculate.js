function calculate(x) {
  var amt;
  if (x >= 5.5) {
      amt = x / 1.011
  } else { amt = x }
  // Hoping that mta rounds up
  return Math.round(amt * 100)/100
}

function amount(x, numRides, newCard) {
  var amt;
  if (numRides) {
    x = x * 2.75;
  } if (newCard) {
    amt = calculate(x) + 1;
  } else {
    amt = calculate(x);
  }
  return amt.toFixed(2);
}

function check(x) {
  var amt;
  if (x >= 5.5) {
      amt = x * 1.011
  } else { amt = x }
  // Hoping that mta rounds up
  return Math.round(amt * 100)/100
}

