const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('resume/resume')
    .catch(next);
});

module.exports = router;
