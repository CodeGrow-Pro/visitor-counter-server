const express = require('express');
const { getVisitorCount, visitorCountIncrement } = require('../../../controllers/visitorCount.controller');
const router = express.Router()

// get visitors count
router.get("/get-visitor-count", getVisitorCount)
// increment every visit 
router.post("/visitor-count/increment", visitorCountIncrement)

module.exports = router