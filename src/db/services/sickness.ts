/* eslint-disable @typescript-eslint/no-explicit-any */

import { GetSicknessFilters } from './types';
import Sickness, { sicknessInput } from '../model/sickness';
import models from "../model";
import { Op } from 'sequelize';


const sickness = models.sickness;

export const create = async (payload: sicknessInput): Promise<any> => {
    const user =  sickness.create(payload);
    return user;
}

export const update = async  (id: number, payload: Partial<sicknessInput>) : Promise<any> => {
    const sicknessData = await sickness.findByPk(id)
    if (!sicknessData) {
        throw new Error("Not found")
    }
    const updateSickness = await (sicknessData as Sickness).update(payload)
    return updateSickness
}

export const getById = async  (id: number,) : Promise<any> => {
    const sicknessData= await sickness.findByPk(id)
    if (!sicknessData) {
        throw new Error("Not found")
    }
    return sicknessData
}


export const getByName = async  (name: string) : Promise<string> => {
    return   await sickness.findOne({ where: {name: name}}).then( (s): any => s?.name)
}

export const getSicknessById = async  (id: number) : Promise<any> => {
    const s = await sickness.findByPk(id);
    return s
}

export const deleteById = async  (id: number) : Promise<boolean> => {
    const deletedSicknessAccount = await sickness.destroy({ where: {id}})
    return !deletedSicknessAccount;
    return true;
}

export const getAll = async  (filters?: GetSicknessFilters,) : Promise<any> => {
    return sickness.findAll({
        where: {
            ...(filters?.isDeleted && {deleteAt: { [Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.inCludeDeleted) && {paranoid: true})
    })
}



