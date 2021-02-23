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

export default {
  Query: {
    users() {
      return users;
    },
  },
};
