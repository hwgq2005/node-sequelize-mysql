const db = require('../../config/db');
const Sequelize = db.sequelize;
const User = Sequelize.import('../../schema/user.js');
const {SUCCESS, DBERROR} = require('../../util/returnStatus');

User.sync({force: false, alter: true});

class UserModel {

    /**
     * 创建用户
     */
    static async create(user) {
        try{
            const result = await User.create(user)
            return SUCCESS('')
        }catch(err){
            return DBERROR(err)
        }
    }

    /**
     * 删除用户
     */
    static async delete(id) {
        await User.destroy({
            where: {
                id,
            }
        })
        return true
    }

    /**
     * 查询用户列表
     */
    static async findAllUserList() {
        return await User.findAll({
            attributes: ['id', 'username']
        })
    }

    /**
     * 查询用户信息
     */
    static async findUserByName(username) {
        return await User.findOne({
            where: {
                username
            }
        })
    }
}

module.exports = UserModel