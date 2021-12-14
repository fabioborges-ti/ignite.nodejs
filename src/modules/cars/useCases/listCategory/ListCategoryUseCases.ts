import { Category } from '../../model/Category';
import { ICategoryRepository } from '../../repositories/interfaces/ICategoryRepository';

class ListCategoryUseCases {
  constructor(private repository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.repository.list();
    return categories;
  }
}

export { ListCategoryUseCases };
