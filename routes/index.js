const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'VRL Score updater' });
});

router.get('/updatestats', (req, res, next) => {
  res.render('updateStats', { title: 'VRL Scoreboard' });
});

module.exports = router;
