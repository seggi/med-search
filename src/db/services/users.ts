
import { GetUsersFilters } from './types';
import Users, { UserInput, UserOutput } from '../model/users';
import { Op } from 'sequelize';
import models from "../model";
import { createUser } from "../model/users";
// const users = models.createUser;

export const create = async (payload: UserInput): Promise<any> => {
    const user =  createUser(payload);
    return user;
}

export const update = async  (id: number, payload: Partial<UserInput>) : Promise<any> => {
    // const user = await users.findByPk(id)
    // if (!user) {
    //     throw new Error("Not found")
    // }

    // const updateUser = await (user as Users).update(payload)
    // return updateUser
}

export const getById = async  (id: number,) : Promise<any> => {
    // const user = await users.findByPk(id)
    // if (!user) {
    //     throw new Error("Not found")
    // }
    // return user
}

export const getByEmail = async  (email: string, jwt: any, secret: any) : Promise<any> => {
    // return   await users.findOne({ where: {email}}).then( u => {
    //     const { id, email } = u!;
    //     return { token: jwt.sign({id, email}, secret)}
    // })
}

export const getEmail = async  (email: string) : Promise<any> => {
    // return   await users.findOne({ where: {email}}).then( u => {
    //     const { email } = u!;
    //     return email;
    // })
}

export const checkEmailPassword = async (email: any, password: any, bcrypt: any) : Promise<any> => {
    // return  users.findOne({ where: { email } })
    // .then(u => bcrypt.compare(password, u!.password))
}

export const getUserById = async  (id: number, user: any) : Promise<any> => {
    // return await users.findByPk(id, user);
   
}

export const deleteById = async  (id: number) : Promise<boolean> => {
    // const deletedUserAccount = await users.destroy({ where: {id}})

    // return !!deletedUserAccount;
    return true;
}

export const getAll = async  (filters?: GetUsersFilters,) : Promise<any> => {
    // return users.findAll({
    //     where: {
    //         ...(filters?.isDeleted && {deleteAt: { [Op.not]: null}})
    //     },
    //     ...((filters?.isDeleted || filters?.inCludeDeleted) && {paranoid: true})
    // })
}