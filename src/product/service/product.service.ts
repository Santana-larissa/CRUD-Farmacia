import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(data: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }
    return product;
  }

  findByName(name: string): Promise<Product[]> {
    return this.productRepository.find({
      where: {
        name: ILike(`%${name}%`),
      },
    });
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    const product = await this.findById(id);
    Object.assign(product, data);
    return this.productRepository.save(product);
  }

  async delete(id: number): Promise<void> {
    const product = await this.findById(id);
    await this.productRepository.remove(product);
  }
}
