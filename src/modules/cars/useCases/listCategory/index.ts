import { CategoryRepository } from '../../repositories/CategoryRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoryUseCases } from './ListCategoryUseCases';

const repository = CategoryRepository.getInstance();
const listCategories = new ListCategoryUseCases(repository);
const listCategoriesController = new ListCategoriesController(listCategories);

export { listCategoriesController };
