import { NotesEntity } from './entities/notes.entity';
import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity,NotesEntity])],
  controllers: [TeacherController],
  providers: [
    TeacherService,
  ]
})
export class TeacherModule {}
