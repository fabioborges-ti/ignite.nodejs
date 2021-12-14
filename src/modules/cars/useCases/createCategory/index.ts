import { CategoryRepository } from '../../repositories/CategoryRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const repository = CategoryRepository.getInstance();
const createCategory = new CreateCategoryUseCase(repository);
const createCategoryController = new CreateCategoryController(createCategory);

export { createCategoryController };
