// ! To be removed in the future
import { DataTypes, Model, Optional } from 'sequelize';
import connect from '../db.config';
import Medicines from './medicines';
import Sickness from './sickness';

interface SicknessMedicinesAttributes {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type sicknessMedicineInput = Optional<SicknessMedicinesAttributes, 'id'>
export type sicknessMedicineOutput = Required<SicknessMedicinesAttributes>

class SicknessMedicine extends Model {
    declare id: number;
    declare readonly createAt: Date | undefined;
    declare readonly updateAt: Date | undefined;
    declare readonly deleteAt: Date | undefined;
}

SicknessMedicine.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },

    sicknessId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },

    medicineId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    }
},  {
    sequelize: connect(),
    timestamps: true,
    paranoid: true,
    modelName: "sickness_medicine"
});

SicknessMedicine.belongsTo(Sickness)
Sickness.hasMany(SicknessMedicine)

SicknessMedicine.belongsTo(Medicines)
Medicines.hasMany(SicknessMedicine)


export default SicknessMedicine;