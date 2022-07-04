import routesx from 'express-promise-router';
import personaController from '../controllers/personas.controller';

const router=routesx();

router.post('/guardar',personaController.addPersona);

export default router;