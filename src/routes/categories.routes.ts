import { Router } from 'express';
import CategoryController from '../modules/cars/controllers/CategoriesController';

const controller = new CategoryController();

const routes = Router();

routes.get('/', controller.list);
routes.post('/', controller.create);

export default routes;
