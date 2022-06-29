import { NotesEntity } from './entities/notes.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCreateNotesDto } from './dto/update-teacher.dto';
import { StudentEntity } from './entities/student.entity';
import { TesteDto } from './dto/teste.dto';
import { CreateStudentDto } from './dto/create-notes';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(NotesEntity)
    private notesRepository: Repository<NotesEntity>
  ) { }


  async createStudent(studentName: string) {
    const studentData = await this.studentRepository.save(this.studentRepository.create({ nameStudent: studentName }));
    return studentData.id
  }

  async createNotes(studentId: string, data: CreateStudentDto) {
    const teste = await this.notesRepository.save(this.notesRepository.create(
      {
        idStudent: studentId,
        note1: data.note1,
        note2: data.note2,
        note3: data.note3,
        note4: data.note4
      }
    ));
    console.log(teste)
  }
  async create(data: CreateStudentDto): Promise<String> {
    const studentId = await this.createStudent(data.nameStudent)
    await this.createNotes(studentId, data)

    return "notes created successfully"
  }

  async updateNotes(id: string, updateCreateNotesDto: UpdateCreateNotesDto) {
    const { nameStudent, note1, note2, note3, note4 } = updateCreateNotesDto 
    await this.studentRepository.update({ id: id }, {nameStudent:nameStudent})
    await this.notesRepository.update({ idStudent: id }, { note1: note1, note2: note2, note3: note3, note4: note4 })
    return {message: "data updated successfully"}
  }

  async findAllStudents() {
    const studentData = await this.studentRepository.find()
    return studentData
  }

  async findAllNotes() {
    const notesData = await this.notesRepository.find()
    return notesData
  }

  async findAll() {
    const allDatas = {}
    const studentsData = await this.findAllStudents()
    const notesData = await this.findAllNotes()

    allDatas['studentsData'] = studentsData
    allDatas['notesData'] = notesData

    return allDatas

  }

}
