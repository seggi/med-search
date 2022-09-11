/* eslint-disable @typescript-eslint/no-explicit-any */

import { GetUsersFilters } from './types';
import Users, { UserInput } from '../model/users';
import models from "../model";
import { Op } from 'sequelize';


const users = models.users;

export const create = async (payload: UserInput): Promise<any> => {
    const user =  users.create(payload);
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

export const getByEmail = async  (email: string, jwt: any, secret: string) : Promise<any> => {
    return   await users.findOne({ where: {email}}).then( u => {
        const { id, email } = u!;
        return { token: jwt.sign({id, email}, secret)}
    })
}

export const getEmail = async  (email: string) : Promise<string> => {
    return   await users.findOne({ where: {email: email}}).then( (u): any => u?.email)
}

export const checkEmailPassword = async (email: string, password: string, bcrypt: any) : Promise<any> => {
    return  users.findOne({ where: { email } })
    .then(u => bcrypt.compare(password, u?.password))
}

export const getUserById = async  (id: number, user: any) : Promise<any> => {
    const u = await users.findByPk(id, user);
    return u
}

export const deleteById = async  (id: number) : Promise<boolean> => {
    const deletedUserAccount = await users.destroy({ where: {id}})
    return !!deletedUserAccount;
    return true;
}

export const getAll = async  (filters?: GetUsersFilters,) : Promise<any> => {
    return users.findAll({
        where: {
            ...(filters?.isDeleted && {deleteAt: { [Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.inCludeDeleted) && {paranoid: true})
    })
}



