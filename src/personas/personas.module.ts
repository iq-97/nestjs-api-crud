import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { PersonaSchema } from './entities/persona.schema';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaSchema])],
  controllers: [PersonasController],
  providers: [PersonasService],
})
export class PersonasModule {}
