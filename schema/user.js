
/* 用户表 */

module.exports = function(sequelize, DataTypes) {

    return sequelize.define('user', {

        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            primaryKey: true,
            autoIncrement:true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail:true
            }
        }
    }, {
        underscored: true,
        freezeTableName: true // Model 对应的表名将与model名相同
    });

}