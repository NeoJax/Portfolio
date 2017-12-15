const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('projects/index')
    .catch(next);
});

router.get('/GoL', (req, res, next) => {
  res.render('projects/GoL')
    .catch(next);
});

module.exports = router;
