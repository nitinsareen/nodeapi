//let fs = require("fs");
//caution with filepath as this needs to be server perspective
//and not folder perspective. Think with relation to index.js
//const FILE_NAME = "./assets/cities.json";

//new version with fs
// let citiesRepo = {
//   get: function (resolve, reject) {
//     fs.readFile(FILE_NAME, function (err, data) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(JSON.parse(data));
//       }
//     });
//   },
//   getById: function (id, resolve, reject) {
//     fs.readFile(FILE_NAME, function (err, data) {
//       if (err) {
//         console.log("Got no city!");
//         reject(err);
//       } else {
//         //apparantly === comparison is failing, so using ==
//         let city = JSON.parse(data).find((singleCity) => singleCity.id == id);
//         console.log(`City found - ${city}`);
//         //console.log(JSON.parse(data));
//         resolve(city);
//       }
//     });
//   },
// };
//older version
let citiesRepo = {
  get: function () {
    return [
      { id: 1, name: "Boston" },
      { id: 2, name: "Chicago" },
      { id: 3, name: "New York" },
      { id: 4, name: "Cincinati" },
      { id: 5, name: "Houston" },
    ];
  },
};

module.exports = citiesRepo;
