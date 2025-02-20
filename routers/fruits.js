const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

let fruits = [
  {
    name: "Apple",
    color: "Red",
  },
  {
    name: "Banana",
    color: "Yellow",
  },
  {
    name: "Kiwi",
    color: "Green",
  },
  {
    name: "Grape",
    color: "Purple",
  },
];
router.get("/", (req, res) => {
  res.json(fruits);
});

router.get("/:id", (req, res) => {
  const fruit = fruits[req.params.id - 1];
  res.json(fruit);
});

router.use(express.json());

router.post("/", [check("color").not().isEmpty()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({ error: errors.array() });
  } else {
    fruits.push(req.body);
    res.json(fruits);
  }
});

router.put("/:id", async (req, res) => {
  fruits[req.params.id - 1].name = "Orange";
  fruits[req.params.id - 1].color = "Orange";
  res.send(fruits);
});

router.delete("/:id", async (req, res) => {
  fruits.splice(req.params.id - 1, 1);
  res.json(fruits);
});
module.exports = router;
