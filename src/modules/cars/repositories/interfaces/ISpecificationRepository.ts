import { Specification } from '../../model/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification | null;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
