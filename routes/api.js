var express = require('express');
var router = express.Router();

/**
 * 响应对象
 * 1.响应对象的方法
 * res.send();  返回任意类型的数据给客户端
 *             注意：1.如果返回一个数字，会被误当成状态码，比如 1 ，状态码对应不到，则报错
 *                  如果确实要返回数字，可加引号“1”
 *                  2.send方法只能出现一次，重复无效，而且还会报错。
 *
 *   res.json();   返回json数据，自动设置响应头
 *
 *   res.render('模板路径',{数据(必须是json)});   读取模板文件，拼接数据，自动将结果发送给浏览器
 *
 *   res.redirect();  重定向  到从指定的URL路径
 *
 *
 *
 *   2、请求对象
 *          客户端向服务端发送的数据，包含请求头和请求体
 *
 *          1.接收GET方式传的值
 *             语法：req.query.参数名
 *
 *          2.接收POST方式的值
 *              通过req.body.(form表单中的参数名);
 *
 *          3.匹配URL网址上的数据
 *            在请求地方去匹配，再通过语法进行接收
 *            语法：req.params.参数名
 *
 *
 */

//接口对象  返回数据
router.get('/', function (req, res) {
    var data = {"name": "小明", "age": 12};
    // res.send(data);
    // // res.send("1");

    //返回状态码+数据  链式调用
    // res.status(200).send("链式调用");


    //返回json   跟res.send()的区别就是json会自动设置响应头，send不自动设置
    // res.json(data);

    //模板渲染
    res.render('index', {title: "模板返回值"})

})

//接口对象  接收客户端传回值
router.get('/paramsReceiver', function (req, res) {
    //通过query请求url中的参数
    var id = req.query.id;

    res.send('获取到的id是' + id);

})


//定义login路由，验证form.html通过post提交过来的数据
router.post('/login', function (req, res) {
    var userName = req.body.username;
    res.send("登陆成功欢迎你：" + userName);
})


//通过参数匹配获取参数
/**
 * 样例：http://localhost:3000/api/params?ifjsklafll&fsafsdfsdafsdf
 *
 * 匹配到的内容为：?ifjsklafll&fsafsdfsdafsdf
 *
 *  params:id  匹配规则为，params后面的所有内容都会被匹配到。
 */
router.post('/params:id', function (req, res) {
    var id = req.params.id;
    res.send("匹配的参数为：" + id);
})


module.exports = router;