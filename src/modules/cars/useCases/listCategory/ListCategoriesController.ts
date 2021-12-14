import { Request, Response } from 'express';
import { ListCategoryUseCases } from './ListCategoryUseCases';

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCases) {}
  handle(req: Request, res: Response): Response {
    const categories = this.listCategoryUseCase.execute();
    return res.json(categories);
  }
}

export { ListCategoriesController };
