import { Router,  Request, Response } from 'express';
import statusRoutes from './status';


const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the Dorsium RPC Gateway API!',
    publicRoutes: {
      status: '/status',
    },
    documentation: 'Refer to README.md for API documentation.',
  });
});

router.use('/status', statusRoutes);

export default router;