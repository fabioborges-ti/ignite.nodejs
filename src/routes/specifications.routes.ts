import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const repository = new SpecificationRepository();

const routes = Router();

routes.post('/', (req, res) => {
  const { name, description } = req.body;
  const service = new CreateSpecificationService(repository);
  const specification = service.execute({ name, description });
  return res.status(201).json(specification);
});

export default routes;
