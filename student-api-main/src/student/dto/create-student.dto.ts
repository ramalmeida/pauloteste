import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator"

export class CreateStudentDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(80)
    nameStudent: string

    @IsNumber()
    @IsNotEmpty()
    note1: number

    @IsNumber()
    @IsNotEmpty()
    note2: number

    @IsNumber()
    @IsNotEmpty()
    note3: number

    @IsNumber()
    @IsNotEmpty()
    note4: number
}

