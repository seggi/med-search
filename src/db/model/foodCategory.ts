import { Optional, Model, DataTypes } from 'sequelize';
import connect from '../db.config';

interface FoodCategoryAttributes {
    id: number;
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}


export type FoodCategoryInput = Optional<FoodCategoryAttributes, 'id' | 'description' >
export type FoodCategoryOutput = Required<FoodCategoryAttributes>


class FoodCategories extends Model {
    declare id: number;
    declare name: string;
    declare description: string;
    declare readonly createAt: Date | undefined;
    declare readonly updateAt: Date | undefined;
    declare readonly deleteAt: Date | undefined;
}


FoodCategories.init({
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
    }
}, {
    timestamps: true,
    sequelize: connect(),
    paranoid: true,
    modelName: "food_category"

})

export default FoodCategories;