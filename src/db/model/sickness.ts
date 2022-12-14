import { DataTypes, Model, Optional } from 'sequelize';
import connect from "../db.config";
import Users from './users';

interface SicknessAttributes {
    id: number;
    name: string;
    description: string;
    treatment: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type sicknessInput = Optional<SicknessAttributes, 'id'>
export type sicknessOutput = Required<SicknessAttributes>

class Sickness extends Model {
    [x: string]: any;
    public id!:  number;
    public name!: string;
    public description!: string;
    public treatment!: string;
    public readonly createAt!: Date | undefined;
    public readonly updateAt!: Date | undefined;
    public readonly deleteAt!: Date | undefined;
}

Sickness.init ({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    treatment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},  {
    sequelize: connect(),
    timestamps: true,
    paranoid: true,
    modelName: "sicknesses"
})

Sickness.belongsTo(Users)
Users.hasMany(Sickness)

export default Sickness;
