const Sequelize = require("sequelize");

const username = 'b7b777a0779be7'
const password = '7ac216a6'
const host = 'us-cdbr-east-02.cleardb.com'
const db_name = 'heroku_3a20056c5207f76'

// Option 1: Passing parameters separately
const sequelize = new Sequelize(db_name, username, password, {
  host: host,
  dialect: "mysql",
  port:3306 /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});



sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user")(sequelize, Sequelize);

module.exports = db;

