const express = require("express");
const app = express();
const myLib = require("./lib");
app.get("/", (req, res) => {
  const welcome = myLib.helloWorld();
  res.send(`${welcome} from a Node.js app with docker!`);
});
app.listen(3000, () => {
  console.log("Server is up on 3000");
});
