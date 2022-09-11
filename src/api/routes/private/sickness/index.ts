
import { Response, Request } from 'express';
import { Router } from 'express';
import { WELCOME_MESSAGE } from '../../../../constants/appText';
import { SUCCESS_RESPONSE } from '../../../../constants/response';



const manageSickness = Router()

manageSickness.get('/', (req: Request, res: Response) => {
    res.status(SUCCESS_RESPONSE).send(WELCOME_MESSAGE)
})

export default manageSickness;