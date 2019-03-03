
// 创建用户验证

const validator = require('validator');

function createValidator(values){

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

	// 判断密码为6位数以上
	if (status && !validator.isLength(values.password,{min:6})) {
		status = false;
		errors.push('密码长度不能小于6位数');
	}

	// 判断邮箱格式
	if(status && !validator.isEmail(values.email)){
		status = false;
		errors.push('请输入正确的邮箱格式');
	}

	return {
		status,
		errors:errors.join(',')
	};
	
}

module.exports = createValidator