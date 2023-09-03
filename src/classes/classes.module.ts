import { Module } from '@nestjs/common';
import { ClassController } from './controllers/classes.controller';
import { ClassService } from './services/classes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassNameEntity } from 'src/typeorm/entities/Class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClassNameEntity])],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
