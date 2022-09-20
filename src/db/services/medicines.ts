/* eslint-disable @typescript-eslint/no-explicit-any */
import models from "../model";
import Medicines, {MedicineInput} from '../model/medicines';

const medicine = models.medicines;

export const create = async (payload: any): Promise<any> => {
    const user =  medicine.create(payload);
    return user;
}

export const update = async  (id: number, payload: Partial<MedicineInput>) : Promise<any> => {
    const medicineData = await medicine.findByPk(id)
    if (!medicineData) {
        throw new Error("Not found")
    }
    const updateMedicine = await (medicineData as Medicines).update(payload)
    return updateMedicine
}

export const getById = async  (id: number,) : Promise<any> => {
    const medicineData= await medicine.findByPk(id)
    if (!medicineData) {
        throw new Error("Not found")
    }
    return medicineData
}


export const getByName = async  (name: string) : Promise<string> => {
    return   await medicine.findOne({ where: {name: name}}).then( (m): any => m?.name)
}

export const getMedicineById = async  (id: number) : Promise<any> => {
    const m = await medicine.findByPk(id);
    return m
}

export const deleteById = async  (id: number) : Promise<boolean> => {
    const deletedMedicineAccount = await medicine.destroy({ where: {id}})
    return !deletedMedicineAccount;
    return true;
}

export const getAll = async  () : Promise<any> => {
    return medicine.findAll();
}



