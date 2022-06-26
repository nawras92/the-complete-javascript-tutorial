module.exports = {
  Query: {
    doesItWork: () => true,
    getAllUsers: (parent, args, models) => {
      const { users } = models;
      return users;
    },
    getUser: (parent, args, models) => {
      const { users } = models;
      console.log(users);
      const { id } = args;
      const user = users.find((u) => u.id === Number(id));
      if (user) {
        return user;
      }
      return {
        id: -10000,
        firstName: 'no user',
        username: 'no user',
        isActive: false,
        favNumber: -10000,
      };
    },
  },
  Mutation: {
    addUser: (parent, args, models) => {
      const { users } = models;
      const { id, firstName, username, favNumber, isActive } = args;
      const newUser = {
        id: Number(id),
        firstName,
        username,
        favNumber,
        isActive,
      };
      users.push(newUser);
      return true;
    },
    removeUser: (parent, args, models) => {
      const { users } = models;
      const { id } = args;
      const index = users.findIndex((u) => u.id === Number(id));
      if (index > -1) {
        users.splice(index, 1);
        return true;
      }
      return false;
    },
    editUser: (parent, args, models) => {
      const { users } = models;
      const { id, firstName, username, favNumber, isActive } = args;
      const index = users.findIndex((u) => u.id === Number(id));
      if (index > -1) {
        const user = users[index];
        user.firstName = firstName || user.firstName;
        user.username = username || user.username;
        user.favNumber = favNumber || user.favNumber;
        user.isActive = isActive || user.isActive;
        return user;
      }
      return {
        id: -10000,
        firstName: 'no user',
        username: 'no user',
        isActive: false,
        favNumber: -10000,
      };
    },
  },
};
