import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, MaxLength, ValidateNested } from "class-validator"

export class TesteDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(80)
    nameStudenty: string
}
