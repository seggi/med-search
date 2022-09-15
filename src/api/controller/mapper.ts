import { sicknessOutput } from '../../db/model/sickness';
import { UserOutput } from '../../db/model/users';
import { User } from "../interfaces";
import { Sickness } from '../interfaces/sickness.interface';

export const toUser = (user: UserOutput): User => {
    return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            birthDate: user.birthDate,
            createAt: user.createdAt,
            updateAt: user.updatedAt,
            deleteAt: user.deletedAt,
   
    }
}

export const toSickness = (sickness: sicknessOutput): Sickness => {
    return {
        id: sickness.id,
        name: sickness.name,
        description: sickness.description,
        createdAt: sickness.createdAt,
        updatedAt: sickness.updatedAt,
        deletedAt: sickness.deletedAt
   
    }
}

