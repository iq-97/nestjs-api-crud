import { Injectable } from '@nestjs/common';
import { PersonaDto } from './dto/persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ) {}

  create(createPersonaDto: PersonaDto) {
    return this.personaRepository.save(createPersonaDto);
  }

  findAll() {
    return this.personaRepository.find();
  }

  findOne(id: number) {
    return this.personaRepository.findOne(id);
  }

  async update(id: number, updatePersonaDto: PersonaDto) {
    let personaUpdate = await this.personaRepository.findOne(id);
    personaUpdate.firstName = updatePersonaDto.firstName;
    personaUpdate.lastName = updatePersonaDto.lastName;
    personaUpdate.isActive = updatePersonaDto.isActive;
    return this.personaRepository.save(personaUpdate);
  }

  remove(id: number) {
    return this.personaRepository.delete(id);
  }
}
