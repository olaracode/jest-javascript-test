let persons = [
  {
    name: "Cole",
    age: 13,
    height: 120,
    gender: "Male",
  },
  {
    name: "Jesus",
    age: 24,
    height: 180,
    gender: "Male",
  },
  {
    name: "Andy",
    age: 24,
    height: 180,
    gender: "Male",
  },
  {
    name: "Kate",
    age: 25,
    height: 160,
    gender: "Female",
  },
];

const oldestMale = (persons) => {
  let oldest;
  persons.map((person) => {
    if (person.gender === "Male") {
      if (oldest === undefined) {
        oldest = person;
      } else if (oldest.age < person.age) {
        oldest = person;
      } else if (oldest.age === person.age) {
        oldest = oldest.name < person.name ? oldest : person;
      }
    }
  });
  return oldest;
};

const sortedPersons = (persons) => {};

const allFemales = (persons) => {
  let females = [];
  persons.map((person) => {
    if (person.gender === "Female") {
      females.push(person);
    }
  });
  return females;
};

const avgHeight = (persons) => {
  let sumHeights = 0;
  persons.map((persons) => {
    console.log(persons.height);
    sumHeights += persons.height;
  });
  return Math.floor(sumHeights / persons.length);
};

const avgAge = (persons) => {};

// DON'T TOUCH THIS CODE
module.exports = { oldestMale, sortedPersons, allFemales, avgHeight, avgAge };
