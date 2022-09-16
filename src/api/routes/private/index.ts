import { Router } from 'express';
import { Response, Request } from 'express';
import { WELCOME_MESSAGE } from '../../../constants/appText';
import { SUCCESS_RESPONSE } from '../../../constants/response';
import manageSickness from './sickness';
import { CurrentUser } from '../../middleware/currentUser';

const router = Router()
const currentUser = new CurrentUser();

router.get('/', (req: Request, res: Response) => {
    res.status(SUCCESS_RESPONSE).send(WELCOME_MESSAGE)
})

router.use('/', manageSickness)

export default router