var express = require("express");
var cors = require("cors");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8080;

app.use(cors());

var corsOptions = {
  origin: "https://cspf-dev-challenge.herokuapp.com/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => res.sendFile(
    path.join(__dirname, "./index.html"
    ))
);

app.listen(PORT, () =>
  console.log(`MemberPressChallenge app listening at http://localhost:${PORT}`)
);

