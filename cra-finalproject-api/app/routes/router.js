const express = require('express');
const router = express.Router();

// /api/post
router.use('/post', require('./api/postRoutes'));
// /api/users
// router.use('/users', require('./api/userRoutes'));

module.exports = router;