/* eslint-disable @typescript-eslint/no-explicit-any */
import { nextTick } from 'process';
import  * as service from "../../../db/services/medicines";
import * as mapper from '../mapper';

export class ManageMedicine {
    async recordMedicine({userId, name, description, posology}: any) {
        try {
            const checkMedicine = await service.getByName(name);
            
            if (!checkMedicine) {
                mapper.toMedicine(await service.create({name, description, userId, posology}));
                return {
                    message: "Medicine Saved with success"
                };
            }

            return {
                message: "Medicine already exist."
            }
        } catch (e: any) {
            nextTick(e)
        }
    }

    async retrieveMedicine() {
        try {
            const medicine = service.getAll();
            return medicine;
        } catch (e: any) {
            nextTick(e);
        }
    }

    async updateMedicine({id, payload}: {id: any, payload: any}) {
        try {
            const m = service.update(id, payload);
            return {
                message: "Medicine updated with success."
            }
        } catch (e: any) {
            nextTick(e)
        }
    }
}