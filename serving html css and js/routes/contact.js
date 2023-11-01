const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactUs', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.post('/contactUs', (req, res, next) => {
    res.redirect('/success');
});
module.exports = router;
