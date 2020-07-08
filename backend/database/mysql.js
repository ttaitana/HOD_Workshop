const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const sequelize = new Sequelize("workshop", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port:8889 /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
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
