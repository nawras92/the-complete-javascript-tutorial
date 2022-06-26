const { sequelize } = require('./models/db');
const models = require('./models/index');

const { User } = models;

async function createUsers() {
  await User.create({
    firstName: 'Nawras',
    username: 'nawras123',
    favNumber: 10,
    isActive: false,
  });

  await User.create({
    firstName: 'Ola',
    username: 'ola44',
    favNumber: 88,
    isActive: true,
  });
  await User.create({
    firstName: 'Hashim',
    username: 'hashim8899',
    favNumber: 7,
    isActive: true,
  });
}

sequelize.sync({ force: true }).then(async () => {
  try {
    await createUsers();
  } catch (e) {
    console.log(`Sequelize database error: ${e}`);
  }
});
