// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */

const convertToCelsius = (f) => {
  let celcius = Math.round((f - 32) * (5 / 9));
  return celcius;
};

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
const describeTemperature = (f) => {
  if (f < 32) {
    return 'Very cold';
  } else if (f < 64) {
    return 'Cold';
  } else if (f < 86) {
    return 'Warm';
  } else if (f < 100) {
    return 'Hot';
  } else if (f >= 100) {
    return 'Very hot';
  }
};

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */

const getRandomInt = (limit) => {
  return Math.round(Math.random() * limit);
};

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  'Please enter a number. We will convert that temperature from Fahrenheit to Celsius.';
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
