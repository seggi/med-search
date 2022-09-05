import { UserController } from './../../controller/users/index';
import { Response, Request } from 'express';
import { Router } from 'express';
import { validationResult } from "express-validator/check";

import { WELCOME_MESSAGE } from './../../../constants/appText';
import { SUCCESS_RESPONSE, INVALID_INPUT } from './../../../constants/response';
import { userRules } from './../../rules/user.rules';


const userRouter = Router()
const userController = new UserController()

userRouter.get('/', (req: Request, res: Response) => {
    res.status(SUCCESS_RESPONSE).send(WELCOME_MESSAGE)
})

userRouter.post('/user/login', userRules.forLogin, async (req: Request, res: Response)=> {
    const errors =  validationResult(req.body)
    if (!errors.isEmpty){
        return res.status(INVALID_INPUT).json(errors.array())
    }
    const user = userController.login(req.body);

    return user.then(u => {
        res.status(200).send(u)
    })
})

userRouter.post('/user/register', userRules?.forRegister, async (req: Request, res: Response)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(INVALID_INPUT).json(errors.array());
    }
    const user = userController.register(req.body);
    return user.then(u => {
        res.json(u)
    })
})


// userRouter.put('/:id', ()=> {})

// userRouter.delete('/:id', ()=> {})

// userRouter.post('/', ()=> {})


export default userRouter;