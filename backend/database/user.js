module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "UserTodo",
    {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        field: "name",
      },
      surname: {
        type: Sequelize.STRING,
        field: "surname",
      },
      address: {
        type: Sequelize.TEXT,
        field: "address",
      },
      age: {
        type: Sequelize.INTEGER,
        field: "age",
      },
      tel: {
        type: Sequelize.STRING,
        field: "tel",
      },
    },
    {
      freezeTableName: true,
      underscored: true,
    }
  );
  return User;
};
