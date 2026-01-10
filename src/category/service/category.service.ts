import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async criar(dadosCategory: Partial<Category>): Promise<Category> {
    const category = this.categoryRepository.create(dadosCategory);
    return this.categoryRepository.save(category);
  }

  listarTodas(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async buscarPorId(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`Categoria com id ${id} não encontrada.`);
    }
    return category;
  }

  async atualizar(
    id: number,
    dadosCategory: Partial<Category>,
  ): Promise<Category> {
    const category = await this.buscarPorId(id);
    Object.assign(category, dadosCategory);
    return this.categoryRepository.save(category);
  }

  async remover(id: number): Promise<void> {
    const category = await this.buscarPorId(id);
    await this.categoryRepository.remove(category);
  }
}
