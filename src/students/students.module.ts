import { Module } from '@nestjs/common';
import { StudentsService } from './services/students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from 'src/typeorm/entities/Student.entity';
import { ClassNameEntity } from 'src/typeorm/entities/Class.entity';
import { StudentsController } from './controllers/students.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity, ClassNameEntity])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
