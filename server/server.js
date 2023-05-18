const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello from app backend");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
