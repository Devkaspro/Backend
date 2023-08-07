const express = require('express');
const { getViews } = require('../../controllers/views.controller');
const router = express.Router();

router.get('',getViews);

module.exports = router;