//Import express server and fork new application
let express = require("express");
let app = express();

let router = express.Router();

//Send array
let cities = [
  { id: 1, name: "Boston" },
  { id: 2, name: "Chicago" },
  { id: 3, name: "New York" },
  { id: 4, name: "Cincinati" },
  { id: 5, name: "Houston" },
];
//Default get for cities
router.get("/", function (req, res, next) {
  //res.send("Boston");
  //res.status(200).send(cities);
  res.status(200).json({
    status: 200,
    statusText: "OK",
    message: "List of all cities",
    data: cities,
  });
});

//Configure the prefix for router
app.use("/api/v1", router);

//create the server for port 5000
const server = app.listen(5000, function () {
  console.log("Server listening on port 5000...");
});
