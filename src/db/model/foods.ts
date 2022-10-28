import { DataTypes, Model, Optional } from 'sequelize';
import connect from '../db.config';
import FoodCategories from './foodCategory';
import Users from './users';

interface FoodsAttributes {
    id: number;
    name: string;
    description: string;
    picture: string;
    property: string;
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
    public picture!: string;
    public property!: string;
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
    picture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    property: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},  {
    timestamps: true,
    sequelize: connect(),
    paranoid: true,
    modelName: "foods"
})

Foods.belongsTo(Users)
Users.hasMany(Foods)
FoodCategories.hasMany(Foods);



export default Foods;