import { Optional, Model, DataTypes } from 'sequelize';
import connect from '../db.config';
import Medicines from './medicines';

interface MedicineBrandAttributes {
    id: number;
    name: string;
    description: string;
    link: string;
    picture: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type MedicineBrandInput = Optional<MedicineBrandAttributes, 'id' | 'description' | 'link'>
export type MedicineBrandOutput = Required<MedicineBrandAttributes>;

class MedicineBrands extends Model {
    declare id: number;
    declare name: string;
    declare description: string;
    declare link: string;
    declare picture: string;
    declare readonly createAt: Date | undefined;
    declare readonly updateAt: Date | undefined;
    declare readonly deleteAt: Date | undefined;
}

MedicineBrands.init ({
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
    link: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,
    sequelize: connect(),
    paranoid: true,
    modelName: "medicine_brands"
});

MedicineBrands.belongsTo(Medicines)
Medicines.hasMany(MedicineBrands)

export default MedicineBrands;