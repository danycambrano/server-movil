import routesx from 'express-promise-router';

import personaRouter from './persona.routes';

const router=routesx();

router.use('/persona',personaRouter);

export default router;