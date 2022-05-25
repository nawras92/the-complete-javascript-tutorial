module.exports = {
  Query: {
    doesItWork: () => true,
    getAllUsers: (parent, args, models) => {
      const { users } = models;
      return users;
    },
  },
};
