import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotesEntity } from './entities/notes.entity';
import { StudentEntity } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(NotesEntity)
    private notesRepository: Repository<NotesEntity>
  ) { }

  async calculateNotes(note1: number, note2: number, note3: number, note4: number) {
    const average = note1 + note2 + note3 + note4 / 4
    console.log(average)
    let status
    if (average >= 6) {
      status = "aprovado"
    }
    else if (average > 4 || average < 6) {
      status = "recuperação"
    }
    else {
      status = "perdeu"
    }
    return status
  }

  async find(id: string) {
    const studentData = await this.studentRepository.findOne(id)
    const notas = await this.notesRepository.findOne({ idStudent: studentData.id })
    const calculateNotes = await this.calculateNotes(notas.note1, notas.note2, notas.note3, notas.note4)


    const returndData = {
      name: studentData.nameStudent,
      status: calculateNotes,
      note1: notas.note1,
      note2: notas.note2,
      note3: notas.note3,
      note4: notas.note4
    }


    return returndData
  }
}
