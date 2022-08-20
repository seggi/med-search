import { Dialect, Sequelize } from 'sequelize';

const connect = () => {
    const hostName = process.env.DB_HOST;
    const userName = process.env.DB_USER as string;
    const database = process.env.DB_NAME as string;
    const password = process.env.DB_PASSWORD;
    const dbDriver = process.env.DB_DRIVER as Dialect ;
    const port = parseInt(process.env.DB_PORT || "5432");

    const sequelizeConnection = new Sequelize(database, userName, password, {
        host: hostName,
        port: port,
        dialect: dbDriver,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    return sequelizeConnection;
}

export default connect;