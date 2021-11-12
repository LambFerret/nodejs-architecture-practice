const express = require('express');
const router = express.Router();
const mdb = require("../lib/MongoConnection")


router.get('/', function(req, res) {
  mdb.name = "sample_mfilx"
  const collection = mdb.collection("movies")
  console.log(mdb.name);
  res.send('index');
});

module.exports = router;
