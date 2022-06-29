import { TeacherService } from './teacher.service';
import { Body, Controller, Get, OnModuleInit, Param, Post, Put, Query } from '@nestjs/common';
import { Client, MessagePattern, Payload, ClientKafka, Transport } from '@nestjs/microservices';
import { CreateStudentDto } from './dto/create-notes';
import { Observable } from 'rxjs';
import { StudentEntity } from './entities/student.entity';
import { TesteDto } from './dto/teste.dto';
import { UpdateCreateNotesDto } from './dto/update-teacher.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('teacher-notes')
@Controller('teacher')
export class TeacherController {
  constructor(
    private teacherService: TeacherService) {
  }

  @Post('send')
  createStudent(@Body() createStudentyDto: CreateStudentDto) {
    return this.teacherService.create(createStudentyDto)

  }
  @Put('update/:id')
  updatecrate(@Body() updateCreateNotesDto: UpdateCreateNotesDto, @Param('id') id: string) {
    console.log(id)
    return this.teacherService.updateNotes(id,updateCreateNotesDto)
  }

  @Get('get-all')
  getAll() {
    return this.teacherService.findAll()
  }
}
