const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const users = [
  {
    username: "test1",
    name: "Ali",
  },
  {
    username: "test2",
    name: "Samia",
  },
  {
    username: "test3",
    name: "Nawras",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Welcome to users database</h1>");
});

app.get("/users", (req, res) => {
  res.status(200);
  res.json({ users: users });
});

app.post("/users", (req, res) => {
  const user = {
    username: req.body.username,
    name: req.body.name,
  };
  users.push(user);
  res.status(200);
  res.json({ user: user });
});

app.get("/users/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find((obj) => obj.username === username);
  if (user === undefined) {
    res.status(404).json({ message: "user not found" });
  } else {
    res.status(200).json({ user: user });
  }
});

app.delete("/users/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find((obj) => obj.username === username);
  if (user === undefined) {
    res.status(404).json({ message: "user not found" });
  } else {
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.status(200).json({ message: "user deleted successfully" });
  }
});

app.patch("/users/:username", (req, res) => {
  const username = req.params.username;
  const user = users.find((obj) => obj.username === username);
  if (user === undefined) {
    res.status(404);
    res.json({ message: "user not found" });
  } else {
    user.username = req.body.username ? req.body.username : user.username;
    user.name = req.body.name ? req.body.name : user.name;
    res.status(200);
    res.json({ user: user });
  }
});

app.listen(3000, () => {
  console.log("we are running on port 3000");
});
