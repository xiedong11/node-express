var express = require('express')
var router = express.Router();

/**
 * Vip用户相关路由声明
 */

//所有的vip用户列表
router.get('/list',function (req,res) {
    res.send('张三，李四，赵六')
})

//vip用户详情
router.get('/info',function (req, res) {
    res.send('会员名：张三 年龄：18')
})

module.exports = router