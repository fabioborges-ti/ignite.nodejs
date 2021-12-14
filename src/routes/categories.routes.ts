import { Router } from 'express';
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { CategoriesController } from '../modules/cars/controllers/CategoriesController';

const repository = new CategoryRepository();
const controller = new CategoriesController(repository);

const routes = Router();

routes.get('/', controller.list);
routes.post('/', controller.create);

export default routes;
