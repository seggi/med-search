import { UserInput } from '../model/users';
import * as userDal from '../dal/users';
import { GetUsersFilters } from '../dal/types';



export const create = (payload: UserInput): Promise<any> => {
    return userDal.create(payload)
}

export const update = (id: number, payload: Partial<UserInput>): Promise<any> => {
    return userDal.update(id, payload)
}

export const getById = (id: number): Promise<any> => {
    return userDal.getById(id)
}

export const getByEmail = (email: string, jwt: any, secret: any): Promise<any> => {
    return userDal.getByEmail(email, jwt,  secret);
}

export const getEmail = (email: string): Promise<any> => {
    return userDal.getEmail(email);
}

export const checkEmailPassword = (email: any, password: any, bcrypt: any ): Promise<any> => {
    return userDal.checkEmailPassword(email, password, bcrypt);
}

export const getUserById = (id: number , user: any): Promise<any> => {
    return userDal.getUserById(id, user);
}

export const deleteById = (id: number): Promise<any> => {
    return userDal.deleteById(id)
}

export const getAll = (filters: GetUsersFilters): Promise<any> => {
    return userDal.getAll(filters)
}

