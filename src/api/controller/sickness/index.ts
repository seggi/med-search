/* eslint-disable @typescript-eslint/no-explicit-any */
import { nextTick } from 'process';
import  * as service from "../../../db/services/sickness";
import * as mapper from '../mapper';

export class ManageSickness {
    async recordSickness({userId, name, description}: any) {
        try {
            const checkSickness = await service.getByName(name)

            if (!checkSickness) {
                mapper.toSickness(await service.create({name, description, userId}));
                return {
                    message: "Saved with success"
                };
            }

            return {
                message: "Sickness already exist."
            }
        } catch (e: any) {
            nextTick(e)
        }
    }

    async retrieveSickness() {
        try {
            const sickness = service.getAll();
            return sickness;
        } catch (e: any) {
            nextTick(e)
        }
    }

    async updateSickness({id, payload}: {id: any, payload: any}) {
        try {
            const s = service.update(id, payload);
            return {
                message: "Sickness updated with success."
            }
        } catch (e: any) {
            nextTick(e)
        }
    }
}