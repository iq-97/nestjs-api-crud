import { Module } from '@nestjs/common';
import { PersonasModule } from './personas/personas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PersonasModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'my_db_flask',
      entities: [],
      synchronize: true,
    })
  ],
})
export class AppModule { }
