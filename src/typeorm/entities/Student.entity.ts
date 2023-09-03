import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ClassNameEntity } from './Class.entity';
import { CommonEntity } from './CommonEntity';

@Entity('students')
export class StudentEntity extends CommonEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  roll: number;

  @Column()
  age: number;

  @Column({ type: String, nullable: false })
  class_id: string;

  @ManyToOne(() => ClassNameEntity, (classDetail) => classDetail.id)
  @JoinColumn({ name: 'class_id' })
  class_info: ClassNameEntity;
}
