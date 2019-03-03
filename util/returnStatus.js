
// 返回状态码
const logger = require('../config/log');
const constantStatus = require('./constantStatus');

const resultStatus = {

    /**
     * 操作成功
     */
    SUCCESS: (result) => {

        let [code, msg, data] = [
            constantStatus.SUCCESS,
            constantStatus.SUCCESS_MSG,
            result
        ]
        return {
            code,
            msg,
            data
        }
    },

    /**
     * 密码错误
     */
    PASSWORK: () => {

        let [code, msg] = [
            constantStatus.PASSWORK,
            constantStatus.PASSWORK_MSG
        ]
        return {
            code,
            msg
        }
    },

    /**
     * 参数错误
     */
    PARAME: (result) => {

        let [code, msg, error] = [
            constantStatus.PARAME,
            constantStatus.PARAME_MSG,
            result
        ]
        return {
            code,
            msg,
            error
        }
    },

    /**
     * 令牌过期
     */
    TOKEN: () => {

        let [code, msg] = [
            constantStatus.TOKEN,
            constantStatus.TOKEN_MSG,
        ]
        return {
            code,
            msg
        }
    },

    /**
     * 帐户不存在
     */
    USERNULL: () => {

        let [code, msg] = [
            constantStatus.USERNULL,
            constantStatus.USERNULL_MSG,
        ]
        return {
            code,
            msg
        }
    },

    /**
     * 数据库操作异常
     */
    DBERROR: (result) => {

        let [code, msg, error] = [
            constantStatus.DBERROR,
            constantStatus.DBERROR_MSG,
            JSON.stringify(result)
        ]
        logger.error(result)
        return {
            code,
            msg,
            error
        }
    },

    /**
     * 没有查询结果
     */
    DBNULL: () => {

        let [code, msg] = [
            constantStatus.DBNULL,
            constantStatus.DBNULL_MSG,
        ]
        return {
            code,
            msg
        }
    },

    /**
     * 其他异常
     */
    EXCEPTION: () => {

        let [code, msg] = [
            constantStatus.EXCEPTION,
            constantStatus.EXCEPTION_MSG,
        ]
        return {
            code,
            msg
        }
    },

    /**
     * 账号已存在
     */
    USEREXIT: () => {

        let [code, msg] = [
            constantStatus.USEREXIT,
            constantStatus.USEREXIT_MSG,
        ]
        return {
            code,
            msg
        }
    },

    /**
     * 账号未激活
     */
    USERACTION: () => {

        let [code, msg] = [
            constantStatus.USERACTION,
            constantStatus.USERACTION_MSG,
        ]
        return {
            code,
            msg
        }
    }

}

module.exports = resultStatus