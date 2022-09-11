import { Router } from 'express';
import manageSickness from './sickness';

const router = Router()
router.use('/', manageSickness)

export default router