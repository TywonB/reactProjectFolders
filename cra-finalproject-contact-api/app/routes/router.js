const express = require('express');
const router = express.Router();

// /api/post
router.use('/employee', require('./api/employeeRoutes'));
// /api/users
// router.use('/users', require('./api/userRoutes'));

module.exports = router;