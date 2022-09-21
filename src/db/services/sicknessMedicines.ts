/* eslint-disable @typescript-eslint/no-explicit-any */
import models from "../model";
import SicknessMedicine, {sicknessMedicineInput} from '../model/sicknessMedicines';

const sicknessMedicine = models.sicknessMedicine;

export const create = async (payload: any): Promise<any> => {
    const user =  sicknessMedicine.create(payload);
    return user;
}

export const update = async  (id: number, payload: Partial<sicknessMedicineInput>) : Promise<any> => {
    const sicknessMedicineData = await sicknessMedicine.findByPk(id)
    if (!sicknessMedicineData) {
        throw new Error("Not found");
    }
    const updateMedicine = await (sicknessMedicineData as SicknessMedicine).update(payload);
    return updateMedicine
}

export const getById = async  (id: number,) : Promise<any> => {
    const sicknessMedicineData= await sicknessMedicine.findByPk(id)

    if (!sicknessMedicineData) {
        throw new Error("Not found");
    }

    return sicknessMedicineData;
}

export const getMedicineById = async  (id: number) : Promise<any> => {
    const m = await sicknessMedicine.findByPk(id);
    return m;
}

export const deleteById = async  (id: number) : Promise<boolean> => {
    const deletedSicknessMedicineAccount = await sicknessMedicine.destroy({ where: {id}})
    return !deletedSicknessMedicineAccount;
}

export const getAll = async  () : Promise<any> => {
    return sicknessMedicine.findAll();
}



