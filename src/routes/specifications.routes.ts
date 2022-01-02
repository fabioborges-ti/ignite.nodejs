import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const routes = Router();

routes.post('/', (req, res) => {
  return createSpecificationController.handle(req, res);
});

export default routes;
