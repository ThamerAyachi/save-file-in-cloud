const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(5050, () => {
  console.log("App running in port 5050");
});
