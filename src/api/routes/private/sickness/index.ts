import { sicknessInput } from './../../../../db/model/sickness';
import { CurrentUser } from './../../../middleware/currentUser';
import { ManageSickness } from './../../../controller/sickness/index';
import { INVALID_INPUT } from './../../../../constants/response';

import { Response, Request } from 'express';
import { Router } from 'express';


const manageSicknessR = Router()
const manageSickness = new ManageSickness();
const currentUser = new CurrentUser()


manageSicknessR.post('/record-sickness', (req: Request, res: Response) => {
    const requestData = req.body;
    const userId = currentUser.getToken(req)?.userId;
    if (!requestData.name && !requestData.description) {
        return res.status(INVALID_INPUT).send("Error")
    }
    const new_data = {
        name: requestData?.name,
        description: requestData?.description,
        userId: userId
    }
    const sickness = manageSickness.recordSickness(new_data);
    return sickness.then(s=> {
        res.status(200).send(s)
    })
})

manageSicknessR.get("/retrieve-sickness",(req: Request, res: Response) => {
    const sickness = manageSickness.retrieveSickness();
    return  sickness.then(s => {
        res.status(200).send(s)
    })
})

export default manageSicknessR;