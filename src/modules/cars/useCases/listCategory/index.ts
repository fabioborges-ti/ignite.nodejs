import { CategoryRepository } from '../../repositories/CategoryRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoryUseCases } from './ListCategoryUseCases';

const repository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoryUseCases(repository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController };
