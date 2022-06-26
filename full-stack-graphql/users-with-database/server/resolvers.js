module.exports = {
  Query: {
    doesItWork: () => true,
    getAllUsers: (parent, args, context) => {
      const { models } = context;
      const { User } = models;
      return User.findAll();
    },
    getUser: async (parent, args, context) => {
      const { models } = context;
      const { User } = models;
      const { id } = args;
      const user = await User.findByPk(id);
      if (!user) {
        return {
          id: -10000,
          firstName: 'no user',
          username: 'no user',
          isActive: false,
          favNumber: -10000,
        };
      }
      return user;
    },
  },
  Mutation: {
    addUser: async (parent, args, context) => {
      const { models } = context;
      const { User } = models;
      const { id, firstName, username, favNumber, isActive } = args;
      const newUser = await User.create({
        firstName,
        username,
        favNumber,
        isActive,
      });
      return newUser.username === username;
    },
    removeUser: async (parent, args, context) => {
      const { models } = context;
      const { User } = models;
      const { id } = args;
      const isDeleted = await User.destroy({
        where: {
          id,
        },
      });
      return isDeleted;
    },
    editUser: async (parent, args, context) => {
      const { models } = context;
      const { User } = models;
      const { id, firstName, username, favNumber, isActive } = args;

      const user = await User.findByPk(id);
      if (!user) {
        return {
          id: -10000,
          firstName: 'no user',
          username: 'no user',
          isActive: false,
          favNumber: -10000,
        };
      }

      const updatedRecord = await user.update(
        {
          firstName,
          username,
          favNumber,
          isActive,
        },
        {
          where: {
            id,
          },
        }
      );
      return updatedRecord;
    },
  },
};
