import { UserOutput } from '../../db/model/users';
import { User } from "../interfaces";
import { Medicine } from '../interfaces/medicine.interface';
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

export const toSickness = (sickness: any): Sickness => {
    return {
        id: sickness.id,
        name: sickness.name,
        userId: sickness.userId,
        description: sickness.description,
        createdAt: sickness.createdAt,
        updatedAt: sickness.updatedAt,
        deletedAt: sickness.deletedAt
   
    }
}


export const toMedicine = (medicine: any): Medicine => {
    return {
        id: medicine.id,
        name: medicine.name,
        posology: medicine.posology,
        description: medicine.description,
        userId: medicine.userId,
        createdAt: medicine.createdAt,
        updatedAt: medicine.updatedAt,
        deletedAt: medicine.deletedAt
    }
}


