import { Sequelize } from "sequelize";

const db = new Sequelize('tidys_db', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;