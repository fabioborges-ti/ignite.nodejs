import { Category } from '../../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): Category | null;
}

export { ICategoryRepository, ICreateCategoryDTO };
