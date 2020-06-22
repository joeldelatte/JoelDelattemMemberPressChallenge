var express = require("express");
var cors = require("cors");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/", (req, res) => res.sendFile(
    path.join(__dirname, "./index.html"
    ))
);

app.listen(PORT, () =>
  console.log(`MemberPressChallenge app listening at http://localhost:${PORT}`)
);

