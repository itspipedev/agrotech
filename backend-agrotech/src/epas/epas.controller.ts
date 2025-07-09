import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EpasService } from './epas.service';
import { CreateEpaDto } from './dto/create-epa.dto';
import { UpdateEpaDto } from './dto/update-epa.dto';

@Controller('epas')
export class EpasController {
  constructor(private readonly epasService: EpasService) {}

  @Post()
  create(@Body() dto: CreateEpaDto) {
    return this.epasService.create(dto);
  }

  @Get()
  findAll() {
    return this.epasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.epasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEpaDto) {
    return this.epasService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.epasService.remove(+id);
  }

  @Patch('restore/:id')
  restore(@Param('id') id: string) {
    return this.epasService.restore(+id);
  }
}
