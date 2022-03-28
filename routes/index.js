const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'VRL Score updater' });
});

router.get('/live', (req, res) => {
  res.render('live', { title: 'VRL Scoreboard' });
});

module.exports = router;
