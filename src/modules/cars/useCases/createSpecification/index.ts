import { SpecificationRepository } from '../../repositories/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const repository = new SpecificationRepository();
const createSpecification = new CreateSpecificationUseCase(repository);
const createSpecificationController = new CreateSpecificationController(
  createSpecification,
);

export { createSpecificationController };
