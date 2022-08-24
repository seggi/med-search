import { GetUsersFilters } from './types';
import  Users, { UserInput, UserOutput } from '../model/users';
import { Op } from 'sequelize';
import models from "../model";

const users = models.users;

export const create = async (payload: UserInput): Promise<any> => {
    const user = await users.create(payload);
    return user;
}

export const update = async  (id: number, payload: Partial<UserInput>) : Promise<any> => {
    const user = await users.findByPk(id)
    if (!user) {
        throw new Error("Not found")
    }

    const updateUser = await (user as Users).update(payload)
    return updateUser
}

export const getById = async  (id: number,) : Promise<any> => {
    const user = await users.findByPk(id)
    if (!user) {
        throw new Error("Not found")
    }
    return user
}

export const deleteById = async  (id: number) : Promise<boolean> => {
    const deletedUserAccount = await users.destroy({ where: {id}})

    return !!deletedUserAccount;
}

export const getAll = async  (filters?: GetUsersFilters,) : Promise<any> => {
    return users.findAll({
        where: {
            ...(filters?.isDeleted && {deleteAt: { [Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.inCludeDeleted) && {paranoid: true})
    })
}