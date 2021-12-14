import { Category } from '../model/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from './interfaces/ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  list(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

    return category;
  }

  findByName(name: string): Category | null {
    const category = this.categories.find(category => {
      return category.name === name;
    });

    if (!category) return null;
    return category;
  }
}

export { CategoryRepository };
