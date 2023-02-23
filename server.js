const express = require("express");
const app = express();
const port = 3000;

// Express Routes
const userRouter = require("./routers/users");
const fruitRouter = require("./routers/fruits");
app.use("/users", userRouter);
app.use("/fruits", fruitRouter);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
