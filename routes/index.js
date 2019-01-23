var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//新闻列表页
router.get('/news',function (req,res) {
  res.send('返回内容为新闻列表')
})

module.exports = router;
