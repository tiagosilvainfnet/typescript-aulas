import { Sequelize } from 'sequelize';
require('dotenv').config()

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.MYSQL_DB}`, {
    dialect: 'mysql'
});

export default sequelize;