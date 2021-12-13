import { CategoryRepository } from '../repositories/CategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private repository: CategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const existsCategory = this.repository.findByName(name);
    if (existsCategory) {
      throw new Error('Category already exists.');
    }
    this.repository.create({ name, description });
  }
}

export { CreateCategoryService };
