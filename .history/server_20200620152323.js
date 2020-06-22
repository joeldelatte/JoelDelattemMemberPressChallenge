var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/", (req, res) => res.sendFile(
    path.join(__dirname, "../public/blog.html"
    ))
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

