const {
    Model,
    DataTypes
} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// create fields/columns for User model
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        unique: true,
        validate: {
            isValidPhoneNo: function(value) {
                if (!value) return value;
    
                var regexp = /^[0-9]+$/;
                var values = (Array.isArray(value)) ? value : [value];
    
                values.forEach(function(val) {
                    if (!regexp.test(val)) {
                        throw new Error("Number only is allowed.");
                    }
                });
                return value;
            }
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    },

    avater: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.DECIMAL(10),
        allowNull: true,
        validate: {
            len: [10],
            isInt: true
        }
    }
  
}, {
    hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },

        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

module.exports = User;