const express = require('express');
const router = express.Router();
const MongoConnection = require("../lib/MongoConnection.js")


router.get('/', async(req, res) => {
  const mdb = await MongoConnection.connect()
  console.log(mdb);
  res.send("123")
});

module.exports = router;
