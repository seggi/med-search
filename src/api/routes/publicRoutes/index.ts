import { WELCOME_MESSAGE } from './../../../constants/appText';
import { SUCCESS_RESPONSE } from './../../../constants/response';
import { Response,  Request } from 'express';
import { Router } from 'express';
import userRouter from './users';



const router = Router()

router.use('/', (req: Request, res: Response) => {
    res.status(SUCCESS_RESPONSE).send(WELCOME_MESSAGE)
})

router.use('/user', userRouter)

export default router