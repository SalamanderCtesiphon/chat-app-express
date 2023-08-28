const express = require("express");
const http = require("http");

const app = express();

http.Server(app);
const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function() {
  console.log("Listening on *: " + port);
});

