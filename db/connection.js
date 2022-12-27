import { Sequelize } from "sequelize";


const conn = new Sequelize('instagram', 'root', '', {
    host: 'localhost',
    dialect : 'mysql'
})



export {conn}