import { Router } from 'express';
import multer from 'multer';
import path from 'path';

import { listCategoriesController } from '../modules/cars/useCases/listCategory';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const upload = multer({
  dest: path.resolve(__dirname, '..', '..', 'tmp'),
});

const routes = Router();

routes.get('/', (req, res) => listCategoriesController.handle(req, res));
routes.post('/', (req, res) => createCategoryController.handle(req, res));
routes.post('/import', upload.single('file'), (req, res) =>
  importCategoryController.handle(req, res),
);

export default routes;
