const router = require('express').Router()
const { makeExpressCallback } = require('../src/costomCallback')
const { getMovie } = require('../src/controllers')

router.get('/', makeExpressCallback(getMovie))

module.exports = router