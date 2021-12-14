import { Request, Response } from 'express';
import { ICategoryRepository } from '../repositories/interfaces/ICategoryRepository';
import { ListCategoryService } from '../services/ListCategoryService';
import { CreateCategoryService } from '../services/CreateCategoryService';
class CategoriesController {
  private repository: ICategoryRepository;

  constructor(repository: ICategoryRepository) {
    this.repository = repository;
  }

  list(req: Request, res: Response): Response {
    const service = new ListCategoryService(this.repository);
    const category = service.execute();
    return res.status(200).json(category);
  }

  create(req: Request, res: Response): Response {
    const { name, description } = req.body;
    const service = new CreateCategoryService(this.repository);
    const category = service.execute({ name, description });
    return res.status(201).json(category);
  }
}

export { CategoriesController };
