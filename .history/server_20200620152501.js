var express = require("express");
var cors = require("cors");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req, res) => res.sendFile(
    path.join(__dirname, "../public/blog.html"
    ))
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

