const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.PORT);
  res.render('index', { title: process.env.OS });
});

module.exports = router;
