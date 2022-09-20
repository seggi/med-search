import { DataTypes, Model, Optional } from 'sequelize';
import connect from '../db.config';
import Users from './users';
interface MedicinesAttributes {
    id: number;
    name: string;
    description: string;
    posology: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type MedicineInput = Optional<MedicinesAttributes, 'id' | "description" | "posology">
export type MedicineOutput = Required<MedicinesAttributes>

class Medicines extends Model<MedicinesAttributes, MedicineInput> implements MedicinesAttributes {
    public id!: number;
    public description!: string;
    public name!: string;
    public posology!: string;
    public readonly createAt!: Date | undefined;
    public readonly updateAt!: Date | undefined;
    public readonly deleteAt!: Date | undefined;
}

Medicines.init ({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    posology: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},  {
    timestamps: true,
    sequelize: connect(),
    paranoid: true
})

Medicines.belongsTo(Users)
Users.hasMany(Medicines)

export default Medicines;