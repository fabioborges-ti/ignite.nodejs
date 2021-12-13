import { Router } from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { CategoryRepository } from '../repositories/CategoryRepository';

const repository = new CategoryRepository();

const routes = Router();

routes.get('/', (req, res) => {
  const categories = repository.list();
  return res.json(categories);
});

routes.post('/', (req, res) => {
  const { name, description } = req.body;
  const service = new CreateCategoryService(repository);
  const category = service.execute({ name, description });
  return res.status(201).json(category);
});

export default routes;
