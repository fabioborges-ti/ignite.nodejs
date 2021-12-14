import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { ListCategoryService } from '../services/ListCategoryService';

class CategoriesController {
  list(req: Request, res: Response): Response {
    const repository = new CategoryRepository();
    const service = new ListCategoryService(repository);
    const category = service.execute();
    return res.status(200).json(category);
  }

  create(req: Request, res: Response): Response {
    const { name, description } = req.body;
    const repository = new CategoryRepository();
    const service = new CreateCategoryService(repository);
    const category = service.execute({ name, description });
    return res.status(201).json(category);
  }
}

export default CategoriesController;
