const router = require('express').Router()
const { makeExpressCallback } = require('../src/customCallback')
const { getMovie, postMovie, patchMovie, deleteMovie } = require('../src/controllers')//deleteMovie

router.get('/', makeExpressCallback(getMovie))
router.get('/:title', makeExpressCallback(getMovie))
router.post('/:title', makeExpressCallback(postMovie))
router.patch('/:title', makeExpressCallback(patchMovie))
router.delete("/:title", makeExpressCallback(deleteMovie))

module.exports = router