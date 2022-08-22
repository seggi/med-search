import { Optional } from 'sequelize';


export type CreateUserDTO = {
    firstName?: string;
    lastName?: string;
    username: string;
    password: string;
    birthDate?: Date;
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
}

export type UpdateUserDTO = Optional<CreateUserDTO, 'username' | 'password'>

export type FilterUserDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}