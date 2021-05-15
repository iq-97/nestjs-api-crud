import { EntitySchema } from 'typeorm';
import { Persona } from './persona.entity';
export const PersonaSchema = new EntitySchema<Persona>({
  name: 'Persona',
  target: Persona,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
});
