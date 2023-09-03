import { StudentEntity } from './Student.entity';
import { CommonEntity } from './CommonEntity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('class_names')
export class ClassNameEntity extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @OneToMany(() => StudentEntity, (students) => students.class_info)
  student_details: StudentEntity[];
}
