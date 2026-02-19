import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import { Category } from '../entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  criar(@Body() dadosCategory: Partial<Category>) {
    return this.categoryService.criar(dadosCategory);
  }

  @Get()
  listarTodas() {
    return this.categoryService.listarTodas();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.buscarPorId(id);
  }

  @Put(':id')
  atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dadosCategory: Partial<Category>,
  ) {
    return this.categoryService.atualizar(id, dadosCategory);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.remover(id);
  }
}
