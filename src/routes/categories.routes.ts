import { Router } from 'express';
import { listCategoriesController } from '../modules/cars/useCases/listCategory';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const routes = Router();

routes.get('/', (req, res) => listCategoriesController.handle(req, res));
routes.post('/', (req, res) => createCategoryController.handle(req, res));

export default routes;
