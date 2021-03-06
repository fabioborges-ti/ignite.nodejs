import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoryRepository } from '../../repositories/interfaces/ICategoryRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = parse();

      stream.pipe(parseFile);
      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }

  async execute(file?: Express.Multer.File): Promise<void> {
    if (file) {
      const categories = await this.loadCategories(file);
      categories.map(async category => {
        const { name, description } = category;
        const exists = this.categoriesRepository.findByName(name);
        if (!exists) {
          this.categoriesRepository.create({ name, description });
        }
      });
    }
  }
}

export { ImportCategoryUseCase };
