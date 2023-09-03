import { ApiProperty } from '@nestjs/swagger';

export class CreateClassesDto {
  @ApiProperty()
  name: string;
}
