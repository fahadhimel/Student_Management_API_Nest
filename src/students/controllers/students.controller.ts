import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StudentsService } from '../services/students.service';
import { CreateStudentDto } from '../dtos/CreateStudent.dto';

@ApiTags('Student-Info')
@Controller('students')
export class StudentsController {
  constructor(private classesServices: StudentsService) {}

  @Get()
  getUser() {
    return this.classesServices.findUsers();
  }

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    try {
      return this.classesServices.createStudent(createStudentDto);
    } catch (err) {
      console.log(err);
    }
  }
}
