// Import the functions
const {
  oldestMale,
  sortedPersons,
  allFemales,
  avgHeight,
  avgAge,
} = require("./solution");
const {
  oldestMaleTest,
  allFemalesTest,
  cases,
  avgHeightTest,
} = require("./testCases");

// Tests

// Check that oldest male in fact returns the oldest male in an array
test("oldestMale should return the oldest male in the array", () => {
  expect(oldestMale(cases[0])).toEqual(oldestMaleTest.firstTest);
});

// Check if oldest male returns correctly even if two male have the same age
test("In case of two males sharing age, oldestMale should return the lowest alphabetically", () => {
  expect(oldestMale(cases[1])).toEqual(oldestMaleTest.secondTest);
});

// ALL FEMALES Test
test("allFemales must return an array with all the females on the list", () => {
  expect(allFemales(cases[0])).toEqual(allFemalesTest.firstTest);
  expect(allFemales(cases[1])).toEqual(allFemalesTest.secondTest);
});

// AVG Height
test("avgHeight must return an integer", () => {
  expect(avgHeight(cases[0])).toBe(avgHeightTest.firstTest);
  expect(avgHeight(cases[1])).toBe(avgHeightTest.secondTest);
});
