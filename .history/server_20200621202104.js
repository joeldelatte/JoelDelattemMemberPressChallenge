var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8080;
var cors = require("cors");

app.use(cors());

res.header("Access-Control-Allow-Origin", req.headers.origin || "*");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => res.sendFile(
    path.join(__dirname, "./index.html"
    ))
);

app.listen(PORT, () =>
  console.log(`MemberPressChallenge app listening at http://localhost:${PORT}`)
);
