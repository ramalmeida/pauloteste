import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(80)
    nameStudent: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    note1: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    note2: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    note3: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    note4: number
}


