import { DataTypes, Model, Optional } from 'sequelize';
import connect from '../db.config';
import Sickness from './sickness';
interface AdvicesAttributes {
    id: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type AdviceInput = Optional<AdvicesAttributes, 'id'>
export type AdviceOutput = Required<AdvicesAttributes>

class Advices extends Model<AdvicesAttributes, AdviceInput> implements AdvicesAttributes {
    public id!: number;
    public description!: string;
    public readonly createAt!: Date | undefined;
    public readonly updateAt!: Date | undefined;
    public readonly deleteAt!: Date | undefined;
}

Advices.init ({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
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

Advices.belongsTo(Sickness)
Sickness.hasMany(Advices)

export default Advices;