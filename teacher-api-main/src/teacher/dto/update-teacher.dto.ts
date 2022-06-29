import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-notes';

export class UpdateCreateNotesDto extends PartialType(CreateStudentDto) {
}
