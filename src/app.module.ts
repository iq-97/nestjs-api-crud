import { Module } from '@nestjs/common';
import { PersonasModule } from './personas/personas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    PersonasModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'my_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
