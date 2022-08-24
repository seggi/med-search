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

export const deleteById = (id: number): Promise<any> => {
    return userDal.deleteById(id)
}

export const getAll = (filters: GetUsersFilters): Promise<any> => {
    return userDal.getAll(filters)
}

