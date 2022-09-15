import { ManageSickness } from './../../../controller/sickness/index';
import { INVALID_INPUT } from './../../../../constants/response';

import { Response, Request } from 'express';
import { Router } from 'express';

const manageSicknessR = Router()
const manageSickness = new ManageSickness();

manageSicknessR.post('/record-sickness', (req: Request, res: Response) => {
    const requestData = req.body;
    if (!requestData.name && !requestData.description) {
        return res.status(INVALID_INPUT).send("Error")
    }

    const sickness = manageSickness.recordSickness(requestData);
    return sickness.then(s=> {
        res.status(200).send(s)
    })
})

export default manageSicknessR;