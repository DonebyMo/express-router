const express = require("express");
const router = express.Router();
// List of Users
let users = [
  {
    name: "User 1",
    age: 30,
  },
  {
    name: "User 2",
    age: 45,
  },
  {
    name: "User 3",
    age: 27,
  },
  {
    name: "User 4",
    age: 22,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users[req.params.id - 1];
  res.json(user);
});

router.use(express.json());
router.post("/", async (req, res) => {
  users.push(req.body);
  res.json(users);
});

router.put("/:id", async (req, res) => {
  users[req.params.id - 1].name = "Muhammad";
  res.send(users);
});

router.delete("/:id", async (req, res) => {
  users.splice(req.params.id - 1, 1);
  res.json(users);
});

module.exports = router;
