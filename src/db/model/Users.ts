import { DataTypes, Model, Optional } from "sequelize";
import connect from "../db.config";

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
    public id!: number;
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public username!: string;
    public password!: string;
    public birthDate!: Date;
    public readonly createAt!: Date | undefined;
    public readonly updateAt!: Date | undefined;
    public readonly deleteAt!: Date | undefined;

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
    modelName: "users"
})

export default Users;