import { DataTypes, Model, ModelDefined, Optional } from "sequelize";
import connect from "../db.config";
import Sickness from "./sickness";


interface UsersAttributes {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    birthDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type UserInput = Optional<UsersAttributes, 'id' | 'firstName' | 'lastName' | 'birthDate' | 'email'>
export type UserOutput = Required<UsersAttributes>


const Users: ModelDefined<UsersAttributes, UserInput> = connect().define(
    'users',
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type:new DataTypes.STRING(128),
            allowNull: true,
        },
        firstName: {
            type:new DataTypes.STRING(128),
            allowNull: true,
        },
        lastName: {
            type:new DataTypes.STRING(128),
            allowNull: true,
        },
        username: {
            type:new DataTypes.STRING(128),
            allowNull: false,
        },
        password: {
            type:new DataTypes.STRING(128),
            allowNull: true,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },{
        tableName: "users"
    }
)

export default Users;

