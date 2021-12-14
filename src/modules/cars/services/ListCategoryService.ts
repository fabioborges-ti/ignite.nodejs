import { Category } from '../model/Category';
import { ICategoryRepository } from '../repositories/interfaces/ICategoryRepository';

class ListCategoryService {
  constructor(private repository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.repository.list();
    return categories;
  }
}

export { ListCategoryService };
