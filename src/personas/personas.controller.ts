import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonaDto } from './dto/persona.dto';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}
  @Post()
  create(@Body() createPersonaDto: PersonaDto) {
    return this.personasService.create(createPersonaDto);
  }

  @Get()
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePersonaDto: PersonaDto) {
    return this.personasService.update(+id, updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personasService.remove(+id);
  }
}
