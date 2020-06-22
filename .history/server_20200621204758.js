var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8080;
var cors = require("cors");

// app.use(cors());

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

// app.get("/", (req, res) => res.sendFile(
//     path.join(__dirname, "./index.html"
//     ))
// );


app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://cspf-dev-challenge.herokuapp.com/"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function (req, res, next) {
  // Handle the get for this route
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, () =>
  console.log(`MemberPressChallenge app listening at http://localhost:${PORT}`)
);

