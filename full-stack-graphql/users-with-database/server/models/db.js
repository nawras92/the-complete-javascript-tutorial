const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'graphql', // Database Name
  'root', // Database user
  'mypass', // Database password,
  {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    define: {
      timestamps: false,
    },
  }
);

async function testDBConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      'Connection to graphql database has been established successfully'
    );
  } catch (e) {
    console.log(`Database connection error: ${e}`);
  }
}

testDBConnection();

module.exports = {
  sequelize,
};
