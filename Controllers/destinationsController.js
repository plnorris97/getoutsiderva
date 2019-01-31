const db = require("../Models");


// this function removes the hyphen and replaces it with a space so it matches the db
const parseStr = (str) => {
  let newStr = str.replace(/-/g, ' ')
  let strArr = newStr.split(' ');
  let newArr = []
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
  }
  let finishedStr = newArr.join(' ');
  return finishedStr;
}


// Defining methods for the parksController
module.exports = {
  findAll: (req, res) => {
    db.Parks
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findName: (req, res) => {
    const parsedName = parseStr(req.params.name)
    db.Parks
      .find({name: parsedName})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // findCounty: (req, res) => {
  //   console.log(req.params.county)
  //   const parsedName = parseStr(req.params.county)
  //   db.Parks
  //     .find({county:parsedName})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};