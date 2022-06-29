import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesEntity } from './entities/notes.entity';
import { StudentEntity } from './entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity,NotesEntity])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
