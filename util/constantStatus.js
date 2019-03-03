
// 状态码

const status = {

    SUCCESS: 1,
    SUCCESS_MSG: '操作成功',

    PASSWORK: 2,
    PASSWORK_MSG: '账号或密码错误',

    PARAME: 3,
    PARAME_MSG: '参数错误',

    TOKEN: 4,
    TOKEN_MSG: '令牌过期',

    USERNULL: 5,
    USERNULL_MSG: '帐户不存在',

    DBERROR: 6,
    DBERROR_MSG: '数据库操作异常',

    DBNULL: 7,
    DBNULL_MSG: '没有查询结果',

    EXCEPTION: 8,
    EXCEPTION_MSG: '其他异常',

    USEREXIT: 9,
    USEREXIT_MSG: '账号已存在',

    USERACTION: 10,
    USERACTION_MSG: '账号未激活，请联系管理员'

}

module.exports = status