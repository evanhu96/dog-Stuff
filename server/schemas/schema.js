const Dog = require("../models/Dog");
const Breed = require("../models/Breed");

// create object with use state based on all selected parameters
// to be put into a search facetsearch
// then a search function for typing
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// Dog Type
const DogType = new GraphQLObjectType({
  name: "Dog",
  fields: () => ({
    id: { type: GraphQLID },
    breed: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    imgLink: { type: GraphQLString },
  }),
});

// Breed Type
const BreedType = new GraphQLObjectType({
  name: "Breed",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    breed: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString,
    },
    size: {
      type: GraphQLString,
    },
    exercise: {
      type: GraphQLString,
    },
    homeSize: {
      type: GraphQLString,
    },
    grooming: {
      type: GraphQLString,
    },
    coat: {
      type: GraphQLString,
    },
    sheds: {
      type: GraphQLString,
    },
    lifeSpan: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    dogs: {
      type: new GraphQLList(DogType),
      resolve(parent, args) {
        return Dog.find();
      },
    },
    dogsByBreed: {
      type: new GraphQLList(DogType),
      args: { breed: { type: GraphQLString } },
      resolve(parent, args) {
        return Dog.find({ breed: args.breed });
      },
    },
    dog: {
      type: DogType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Dog.findById(args.id);
      },
    },
    breeds: {
      type: new GraphQLList(BreedType),
      resolve(parent, args) {
        return Breed.find();
      },
    },
    breed: {
      type: BreedType,
      args: { breed: { type: GraphQLString } },
      resolve(parent, args) {
        return Breed.findOne({ breed: args.breed });
      },
    },
    breedSearch: {
      type: BreedType,
      args: { breed: { type: GraphQLString } },
      resolve(parent, args) {
        return async () =>
          await Breed.aggregate([
            {
              $search: {
                autocomplete: {
                  query: `${args.breed}`,
                  path: "breed",
                  fuzzy: {
                    maxEdits: 2,
                    prefixLength: 3,
                  },
                },
              },
            },
          ]).toArray();
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a dog
    addDog: {
      type: DogType,
      args: {
        breed: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const dog = new Dog({
          breed: args.breed,
          name: args.name,
          age: args.age,
        });

        return dog.save();
      },
    },
    // Delete a dog
    deleteDog: {
      type: DogType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Dog.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});