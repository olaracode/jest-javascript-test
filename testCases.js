const oldestMaleTest = {
  firstTest: {
    name: "Robert",
    age: 40,
    height: 155,
    gender: "Male",
  },
  secondTest: {
    name: "Christian",
    age: 26,
    height: 155,
    gender: "Male",
  },
};

const allFemalesTest = {
  firstTest: [
    {
      name: "Kate",
      age: 25,
      height: 160,
      gender: "Female",
    },
    {
      name: "Susan",
      age: 38,
      height: 175,
      gender: "Female",
    },
  ],
  secondTest: [
    {
      name: "Kate",
      age: 25,
      height: 160,
      gender: "Female",
    },
    {
      name: "Susan",
      age: 38,
      height: 175,
      gender: "Female",
    },
    {
      name: "Margaret",
      age: 38,
      height: 175,
      gender: "Female",
    },
    {
      name: "Christina",
      age: 38,
      height: 175,
      gender: "Female",
    },
  ],
};

const avgHeightTest = {
  firstTest: 158,
  secondTest: 161,
};

const cases = [
  [
    {
      name: "Cole",
      age: 13,
      height: 120,
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
    {
      name: "Susan",
      age: 38,
      height: 175,
      gender: "Female",
    },
    {
      name: "Robert",
      age: 40,
      height: 155,
      gender: "Male",
    },
  ],
  [
    {
      name: "Cole",
      age: 13,
      height: 120,
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
    {
      name: "Susan",
      age: 38,
      height: 175,
      gender: "Female",
    },
    {
      name: "Margaret",
      age: 38,
      height: 175,
      gender: "Female",
    },
    {
      name: "Christina",
      age: 38,
      height: 175,
      gender: "Female",
    },
    {
      name: "Peter",
      age: 26,
      height: 155,
      gender: "Male",
    },
    {
      name: "Christian",
      age: 26,
      height: 155,
      gender: "Male",
    },
  ],
];

module.exports = { cases, oldestMaleTest, allFemalesTest, avgHeightTest };
