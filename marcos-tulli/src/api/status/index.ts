import { Router, Request, Response } from 'express';
import { StatusServiceInstance } from '@services';


const router = Router();

router.get('/', (req: Request, res: Response) => {
  const statusBody = StatusServiceInstance.getStatus(); 
  res.json(statusBody);
});

export default router;
