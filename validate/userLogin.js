
// 创建用户验证

const validator = require('validator');

function loginValidator(values){

	let errors = [],
		status = true;

	// 判断必填项
	if (status && validator.isEmpty(values.username)) {
		status = false;
		errors.push('账号不能为空');
	}

	// 判断必填项
	if (status && validator.isEmpty(values.password)) {
		status = false;
		errors.push('密码不能为空');
	}

	return {
		status,
		errors:errors.join(',')
	};
	
}

module.exports = loginValidator