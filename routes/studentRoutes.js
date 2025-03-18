const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/filter-and-group', studentController.filterAndGroupStudents);

module.exports = router;
