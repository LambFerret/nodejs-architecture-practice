const router = require('express').Router()
const { makeExpressCallback } = require('../src/costomCallback')
const { getMovie, postMovie, updateMovie } = require('../src/controllers')//deleteMovie

router.get('/', makeExpressCallback(getMovie))
router.get('/:title', makeExpressCallback(getMovie))
router.post('/:title', makeExpressCallback(postMovie))
router.patch('/:title', makeExpressCallback(updateMovie))
// router.delete("/:title", makeExpressCallback(deleteMovie))

module.exports = router