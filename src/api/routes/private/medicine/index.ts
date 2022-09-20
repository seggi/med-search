import { ManageMedicine } from './../../../controller/medicine/index';
import { CurrentUser } from './../../../middleware/currentUser';
import { INVALID_INPUT } from './../../../../constants/response';

import { Response, Request } from 'express';
import { Router } from 'express';


const manageMedicineR = Router()
const manageMedicine = new ManageMedicine();
const currentUser = new CurrentUser()


manageMedicineR.post('/record-medicine', (req: Request, res: Response) => {
    const payload = req.body;
    const userId = currentUser.getToken(req)?.userId;
    if (!payload.name && !payload.description) {
        return res.status(INVALID_INPUT).send("Error")
    }
    const new_data = {
        name: payload?.name,
        posology: payload?.posology,
        description: payload?.description,
        userId: userId
    }
    const medicine = manageMedicine.recordMedicine(new_data);
    return medicine.then(m=> {
        res.status(200).send(m)
    })
})


manageMedicineR.get("/retrieve-medicine",async (req: Request, res: Response) => {
    const medicine = manageMedicine.retrieveMedicine();
    const s = await medicine;
    res.status(200).send(s);
})

manageMedicineR.put("/update-medicine/:medicineId", async (req: Request, res: Response) => {
    const medicineId = req.params.medicineId;
    const payload = req.body;
    console.log(payload, "::::")
    const s = await manageMedicine.updateMedicine({id: medicineId, payload: payload})
    return res.status(200).send(s);
} )



export default manageMedicineR;