const express = require("express");
const app = express();
const myLib = require("./lib");
app.get("/", (req, res) => {
  const text = myLib.helloWorld();
  res.send(`${text} from a Node.js app with ci/cd automated in aws!`);
});
app.listen(3000, () => {
  console.log("Server is up on 3000");
});
