import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from 'src/typeorm/entities/Student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from '../dtos/CreateStudent.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  findUsers() {
    try {
      return this.studentRepository.find({
        relations: ['class_info'],
      });
    } catch (err) {
      console.log(err);
    }
  }

  createStudent(createStudentDto: CreateStudentDto) {
    try {
      return this.studentRepository.save({
        name: createStudentDto.name,
        roll: createStudentDto.roll,
        age: createStudentDto.age,
        class_id: createStudentDto.class_id,
      });
    } catch (err) {
      // console.log(err);
    }
  }
}
