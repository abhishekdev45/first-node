const express = require('express');

const router = express.Router();

router.get('/',(req,res,next) => {
    // console.log("in the next middleware");
    res.send('<h1>hello</h1>');
})

module.exports = router;