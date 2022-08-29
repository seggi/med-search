import { DataTypes, Model, Optional } from 'sequelize';
import connect from '../db.config';
import Sickness from './sickness';

interface FoodsAttributes {
    id: number;
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type FoodInput = Optional<FoodsAttributes, 'id' | "description">
export type FoodOutput = Required<FoodsAttributes>

class Foods extends Model<FoodsAttributes, FoodInput> implements FoodsAttributes {
    public id!: number;
    public description!: string;
    public name!: string;
    public readonly createAt!: Date | undefined;
    public readonly updateAt!: Date | undefined;
    public readonly deleteAt!: Date | undefined;
}

Foods.init ({
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
},  {
    timestamps: true,
    sequelize: connect(),
    paranoid: true
})

Foods.belongsTo(Sickness)
Sickness.hasMany(Foods)

export default Foods;