/* eslint-disable @typescript-eslint/no-explicit-any */
import { nextTick } from 'process';
import { Sickness } from "../../interfaces/sickness.interface";
import  * as service from "../../../db/services/sickness";
import * as mapper from '../mapper';

export class ManageSickness {
    async recordSickness({name, description}: Sickness) {
        try {
            const checkSickness = await service.getByName(name)

            if (!checkSickness) {
                console.log(">>>>>>>");
                const s = mapper.toSickness(await service.create({name, description}));
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
}