const express = require('express');
const router = express.Router();
const MongoConnection = require("../lib/MongoConnection.js")
// const mongoose = require("mongoose")


router.get('/', async (req, res) => {
  const mdb = await MongoConnection.connect()
  const movies = mdb.collection("movies")
  const findone = await movies.findOne({
    year:1995
  })
  const findarray = movies.find({
    year:{$lt:1900}
  })
  const result =await findarray.toArray()
  const count = await findarray.count()
  res.json(result)
});

module.exports = router;
