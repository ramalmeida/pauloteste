import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('student-notes')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Get('find/:id')
  find(@Param() id: string) {
    return this.studentService.find(id);
  }
}

