import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClassService } from '../services/classes.service';
import { CreateClassesDto } from '../dtos/CreateClass.dto';

@ApiTags('Class-Info')
@Controller('classes')
export class ClassController {
  constructor(private classesServices: ClassService) {}

  @Get()
  getUser() {
    return this.classesServices.findUsers();
  }

  @Post()
  createStudent(@Body() createClassesDto: CreateClassesDto) {
    try {
      return this.classesServices.createStudent(createClassesDto);
    } catch (err) {
      console.log(err);
    }
  }
}
