const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('contact/contact')
    .catch(next);
});

module.exports = router;
