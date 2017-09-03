const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', applicantController.homePage);
router.get('/apply', applicantController.addApplicant);
router.post('/apply', catchErrors(applicantController.createApplicant));

module.exports = router;
