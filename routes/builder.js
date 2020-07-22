const { getBuilderPage, getPreviewPage } = require('../controllers/builder')
const express = require('express')
const router = express.Router()

router.route('/')
    .get(getBuilderPage)
    .post(getPreviewPage)

module.exports = router