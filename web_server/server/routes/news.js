var express = require('express');
var router = express.Router();

/* GET news list. */
router.get('/', function(req, res, next) {
  /* rpc function */
  news = backend_server.getNews();
  res.json(news);
});

module.exports = router;
