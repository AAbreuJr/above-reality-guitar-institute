var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.redirect('/lessons', {
    title: 'Above Reality Guitar Institute'
  });
});

module.exports = router;
