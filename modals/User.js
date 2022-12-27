import { DataTypes } from "sequelize";
import {conn} from '../db/connection.js'




const User = conn.define('User', {
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },

    nomecompleto : {
        type : DataTypes.STRING,
        allowNull : false
    },

    nomeuser : {
        type : DataTypes.STRING,
        allowNull : false
    },

    senha : {
        type : DataTypes.STRING,
        allowNull : false
    }

})



export {User}