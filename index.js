const express = require("express");
const app = express();

const db = require("./database/mysql");
const User = db.user;

const core = require("cors");

app.use(core());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

// default path
app.get("/", (req, res) => {
  res.send("Welcome to todo member");
});

// get all members
app.get("/members", async (req, res) => {
  let user = await User.findAll();
  res.send(user);
});

// get a member
app.get("/member/:id", async (req, res) => {
  let user = await User.findOne({ where: { id: req.params.id } });
  res.send(user);
});

// add new user
app.post("/add", async (req, res) => {
  let new_user = req.body;
  let user = await User.create(new_user);
  res.status(200).send(["User created", user]);
});

// update info
app.put("/update/:id", async (req, res) => {
  let id = req.params.id;
  let new_info = req.body;
  let user = await User.update(new_info, { where: { id } });
  console.log(new_info, user);

  if (user[0] === 1) {
    res.send("user info has been updated");
  } else {
    res.status(500).send("Cause some error");
  }
});

// delete user
app.post("/delete", async (req, res) => {
  let users = req.body;
  users.forEach(async (element) => {
    let user = await User.destroy({
      where: {
        id: element,
      },
    });
    if (user !== 1) {
      res.status(500).send(`User ${element.id} not found`);
    }
  });
  res.status(200).send("Users deleted");
});

app.listen(process.env.POST, () => {
  console.log("Server start on port 3000");
});
