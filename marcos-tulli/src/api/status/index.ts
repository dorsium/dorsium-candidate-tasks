import { Router, Request, Response } from 'express';
import { getConfig } from '../../config';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const { version, mode } = getConfig();

  res.json({
    status: 'ok',
    version,
    timestamp: new Date().toISOString(),
    mode
  });
});

export default router;
