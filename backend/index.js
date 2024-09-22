const express = require("express");
const app = express();
const port = 3000;

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Standard GET Response, Welcome ${username}`);
});

app.post("/register", (req, res) => {
  res.send(`Standard POST Response, Welcome`);
});

app.listen(port, () => {
  console.log(`listening to port ${port} `);
});
