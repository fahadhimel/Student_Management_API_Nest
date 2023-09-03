import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassNameEntity } from 'src/typeorm/entities/Class.entity';
import { Repository } from 'typeorm';
import { CreateClassesDto } from '../dtos/CreateClass.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassNameEntity)
    private studentRepository: Repository<ClassNameEntity>,
  ) {}

  findUsers() {
    try {
      return this.studentRepository.find();
    } catch (err) {
      console.log(err);
    }
  }

  createStudent(createClassesDto: CreateClassesDto) {
    try {
      return this.studentRepository.save({ name: createClassesDto.name });
    } catch (err) {
      console.log(err);
    }
  }
}
