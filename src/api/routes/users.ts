import { Response, Request } from 'express';
import { Router } from 'express';

const userRouter = Router()

userRouter.get('/login', async (req: Request, res: Response)=> {
    const result = {data: "Start"}
    return res.status(200).send(result)
})

// userRouter.put('/:id', ()=> {})

// userRouter.delete('/:id', ()=> {})

// userRouter.post('/', ()=> {})


export default userRouter;