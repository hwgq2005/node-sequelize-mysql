
const express = require('express');
const router = express.Router();
const controls = require('../controllers');
const jwt = require('jsonwebtoken');
const {tokenSecret} = require('../config/base');
const {TOKEN, PARAME} = require('../util/returnStatus');

// 用户接口
router.post("/user/login",controls.user.login);
router.post("/user/register",controls.user.create);

// 判断是否登录（前后台完全分离）
function isWebLogin(req,res,next){
	let token = req.body.token || req.query.token || req.headers["x-access-token"];
	if (token) {
	  jwt.verify(token, tokenSecret.web, function (err, decode) {
      // 判断token有无失效
      if (err) { 
        let result = PARAME(err);
        res.json(result)
      } else {
        req.decode = decode; 
        next();
      }
    })
	}else{
    let result = TOKEN();
    res.json(result);
	}
}

module.exports = router