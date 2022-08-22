import { UserOutput } from './../../../db/model/Users';
import { User } from "../../interfaces";

export const toUser = (user: UserOutput): User => {
    return {
            id: user.id,
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