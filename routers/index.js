const router = require('express').Router()
const { makeExpressCallback } = require('../src/costomCallback')
const { getMovie, postMovie } = require('../src/controllers')

router.get('/', makeExpressCallback(getMovie))
router.post('/', makeExpressCallback(postMovie))

module.exports = router