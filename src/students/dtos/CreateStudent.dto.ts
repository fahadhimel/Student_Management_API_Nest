import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  roll: number;

  @ApiProperty()
  age: number;

  @ApiProperty()
  class_id: string;
}
