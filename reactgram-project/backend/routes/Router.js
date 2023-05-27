const express = require('express');
const router = express();

// Test route.
router.get('/', (req, res) => {
    res.send('API working!');
});

module.exports = router;
