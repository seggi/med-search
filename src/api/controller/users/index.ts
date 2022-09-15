/* eslint-disable @typescript-eslint/no-explicit-any */
import 'dotenv/config';
import bcrypt from "bcrypt";
import jwt  from 'jsonwebtoken';
import  bluebird from "bluebird";

import * as service from '../../../db/services/users';
// import { CreateUserDTO, FilterUserDTO, UpdateUserDTO } from '../../dto/user.dto';
import { User } from '../../interfaces';
import * as mapper from '../mapper';
import { nextTick } from 'process';

export class UserController {
    private readonly _saltRounds = 12;
    private readonly _jwtSecret = process.env.JWT_SECRET || "";

    static get userAttributes() {
        return [
            "id",
            "email",
            "firstName",
            "lastName",
            "username",
            "birthDate",
        ];
    }

    private static _user: any;

    static get user() {
        return UserController._user;
    }

    async register({ username, email, password} : User) {
        const hash = bcrypt.hashSync(password, this._saltRounds);
        try {
            const checkUser = await service.getEmail(email)
            if (!checkUser) {
                const u = mapper.toUser(await service.create({ email, username, password: hash}));
                return  this.getUserById(u?.id);
            }
            return {
                message: `User already exist.`
            }
            
        } catch(e: any) {
            nextTick(e)
        }
    }

    async login({ email }: User ) {
        return await service.getByEmail(email, jwt, this._jwtSecret);
    }

    async verifyToken(token: string) {
        return new Promise((resolve) => {
            jwt.verify(token, this._jwtSecret, (err, decoded: any) => {
                if (err) {
                    resolve(false)
                    return
                }

                UserController._user = service.getById(decoded['id'])
                resolve(true)
                return
            })
        })
    }

    getUserById(id: number) {
        return service.getUserById(id, {
            attributes: UserController.userAttributes
        }) as bluebird<User>
    }
}




// export const create = async(payload: CreateUserDTO): Promise<User> => {
//     return mapper.toUser(await service.create(payload))
// }

// export const update = async(id: number, payload: UpdateUserDTO): Promise<User> => {
//     return mapper.toUser(await service.update(id, payload))
// }

// export const getById = async(id: number): Promise<User> => {
//     return mapper.toUser(await service.getById(id))
// }

// export const deleteById = async(id: number): Promise<boolean> => {
//     const isDeleted = await service.deleteById(id)
//     return isDeleted
// }

// export const getAll = async (filters: FilterUserDTO): Promise<User> => {
//     return (await service.getAll(filters)).map(mapper.toUser)
// }