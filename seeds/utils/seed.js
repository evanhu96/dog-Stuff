const connection = require("../config/connection");
const connection = require("../config/connection");
const { Dog ,Breed} = require("../models");
const {  getRandomName, getRandomAge } = require("./data");

// Start the seeding runtime timer
console.time("seeding");

// Creates a connection to mongodb
connection.once("open", async () => {
  // Delete the entries in the collection
  await Dog.deleteMany({});

  // Empty arrays for randomly generated dogs and comments
  const dogs = [];

  // Makes comments array
  for (var i = 0; i < 1000; i++) {
    var id = Math.floor(Math.random() * 222) + 1
    dogs.push({
      breed:( await Breed.collection.findOne({id:id})).breed,
      name: getRandomName(),
      age: getRandomAge(),
    });
  }

  // Wait for the dogs array to be inserted into the database
  await Dog.collection.insertMany(dogs);

  // Log out a pretty table for comments and dogs
  console.table(dogs);
  console.timeEnd("seeding complete 🌱");
  process.exit(0);
});
