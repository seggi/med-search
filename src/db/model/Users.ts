import { DataTypes, Model, Optional } from "sequelize";
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

class Users extends Model<UsersAttributes, UserInput> implements UsersAttributes {
    declare id: number;
    declare email: string;
    declare firstName: string;
    declare lastName: string;
    declare username: string;
    declare password: string;
    declare birthDate: Date;
    declare readonly createAt: Date | undefined;
    declare readonly updateAt: Date | undefined;
    declare readonly deleteAt: Date | undefined;

}

Users.init ({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    birthDate: {
        type: DataTypes.STRING,
        allowNull: true,
    },

}, {
    sequelize: connect(),
    timestamps: true,
    paranoid: true,
    modelName: "Users"
})

export default Users;