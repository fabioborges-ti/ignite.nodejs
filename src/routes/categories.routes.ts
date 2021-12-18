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

routes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

routes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

routes.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res);
});

export default routes;
