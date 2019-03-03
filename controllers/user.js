
const logger = require('../config/log');
const userModel = require('../services/models/userModel');
const userLogic= require('../services/logics/userLogic');

class UserController{

	/**
	 * 创建用户
	 */
	static async create(req,res){

		let values = req.body,
			result = await userLogic.create(values);

		res.json(result);

	}

	/**
	 * 登录
	 */
	static async login(req,res){

		let values = req.body,
			result = await userLogic.login(values);

		res.json(result);

	}
	
}

module.exports = UserController