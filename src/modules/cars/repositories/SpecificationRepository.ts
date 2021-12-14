import { Specification } from '../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from './interfaces/ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
    return specification;
  }

  findByName(name: string): Specification | null {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );
    if (!specification) return null;
    return specification;
  }
}

export { SpecificationRepository };
