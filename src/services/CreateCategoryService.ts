import { Category } from 'src/model/Category';
import { CategoryRepository } from '../repositories/CategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private repository: CategoryRepository) {}

  execute({ name, description }: IRequest): Category {
    const existsCategory = this.repository.findByName(name);
    if (existsCategory) {
      throw new Error('Category already exists.');
    }
    const category = this.repository.create({ name, description });
    return category;
  }
}

export { CreateCategoryService };
