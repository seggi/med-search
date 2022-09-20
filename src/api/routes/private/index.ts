import { Router } from 'express';
import { Response, Request } from 'express';
import { WELCOME_MESSAGE } from '../../../constants/appText';
import { SUCCESS_RESPONSE } from '../../../constants/response';
import manageMedicine from './medicine';
import manageSickness from './sickness';

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.status(SUCCESS_RESPONSE).send(WELCOME_MESSAGE)
})

router.use('/', manageSickness)
router.use('/', manageMedicine)

export default router