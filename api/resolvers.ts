const users = [
  {
    id: 1,
    name: 'Kate Chopin',
  },
  {
    id: 2,
    name: 'Paul Auster',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

export default {
  Query: {
    users: () => users,
  },
};
