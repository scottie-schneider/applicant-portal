const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');
// Do work here
router.get('/', applicantController.homePage);
router.get('/apply', applicantController.addApplicant);
router.post('/apply', applicantController.createApplicant);

module.exports = router;
