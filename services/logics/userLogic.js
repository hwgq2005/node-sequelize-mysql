
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const logger = require('../../config/log');
const userModel = require('../models/userModel');
const returnStatus = require('../../util/returnStatus');
const userCreateValidate = require('../../validate/userCreate');
const userLoginValidate = require('../../validate/userLogin');
const {tokenSecret} = require('../../config/base');

class UserLogic{

	/**
	 * 创建用户
	 */
	static async create(options){

		let values = options;
		let validateResult = userCreateValidate(values);
		
		// 验证判断
		if (!validateResult.status) {
			const result = returnStatus.PARAME(validateResult.errors);
			return result;
		}
        // 查询用户名是否重复
        const existUser = await userModel.findUserByName(values.username);
        if (existUser) {
        	const result = returnStatus.USEREXIT();
        	return result;
        }else{
        	const md5 = crypto.createHash("md5"),
		    	  newPas = md5.update(values.password).digest("hex");
		 	values.password = newPas;
		 	const result = await userModel.create(values);
		 	return result;
        }
		
	}

	/**
	 * 登录
	 */
	static async login(options){

		let values = options;
		let validateResult = userLoginValidate(values);
		
		// 验证判断
		if (!validateResult.status) {
			const result = returnStatus.PARAME(validateResult.errors);
			return result;
		}

        // 查询用户是否存在
        const user = await userModel.findUserByName(values.username);
        if (user) {
        	let md5 = crypto.createHash("md5"),
    			newPas = md5.update(values.password).digest("hex");
        	if (newPas == user.password) {
        		let token = jwt.sign({
				     user: values.username,
				     password: values.password,
				     user_id: user.user_id
				}, tokenSecret.web, {
					// 30天失效-单位秒
				    expiresIn:  24 * 60 * 60 * 30
				});
				let json = {
					token,
					user_id:user.user_id,
					email:user.email
				}
				const result = returnStatus.SUCCESS(json);
				return result;
        	}else{
        		const result = returnStatus.PASSWORK();
        		return result;
        	}
        }else{
        	const result = returnStatus.PASSWORK();
        	return result;
        }
		
	}
	
}


module.exports = UserLogic