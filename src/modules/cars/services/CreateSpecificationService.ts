import { Specification } from '../model/Specification';
import { ISpecificationRepository } from '../repositories/interfaces/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private repository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): Specification {
    const specificationAlreadyExists = this.repository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
    });
    this.repository.create(specification);
    return specification;
  }
}

export { CreateSpecificationService };
