import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposEpasService } from './tipos_epas.service';
import { CreateTiposEpaDto } from './dto/create-tipos_epa.dto';
import { UpdateTiposEpaDto } from './dto/update-tipos_epa.dto';

@Controller('tipos-epas')
export class TiposEpasController {
  constructor(private readonly tiposEpasService: TiposEpasService) {}

  @Post()
  create(@Body() dto: CreateTiposEpaDto) {
    return this.tiposEpasService.create(dto);
  }

  @Get()
  findAll() {
    return this.tiposEpasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposEpasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTiposEpaDto) {
    return this.tiposEpasService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposEpasService.remove(+id);
  }

  @Patch('restore/:id')
  restore(@Param('id') id: string) {
    return this.tiposEpasService.restore(+id);
  }
}