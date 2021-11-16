// const express = require('express');
// const router = express.Router();
// const MongoConnection = require("../src/dataAccess/MongoConnection")
// // const mongoose = require("mongoose")


// router.get('/', async (req, res) => {
//   const mdb = await MongoConnection.connect()
//   console.log(mdb);
//   const movies = mdb.collection("movies")
//   const findone = await movies.findOne({
//     year:1995
//   })
//   const findarray = movies.find({
//     year:{$lt:1900}
//   })
//   const result =await findarray.toArray()
//   const count = await findarray.count()
//   res.json(result)
// });

// module.exports = router;
