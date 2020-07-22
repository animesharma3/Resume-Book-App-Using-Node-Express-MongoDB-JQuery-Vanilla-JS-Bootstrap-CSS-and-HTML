const { getHomepage } = require('../controllers/routes')
const express = require('express')
const router = express.Router()

router.get('/', getHomepage)

module.exports = router