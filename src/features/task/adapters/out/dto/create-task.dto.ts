import { Transform, Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MinDate } from "class-validator";
import { IsFutureDateTime } from "src/root/pipes/date-validator.pipe";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    projectId: number;

    @IsOptional()
    @IsDate({ message: 'A data deve ser uma data válida' })
    @Type(() => Date)
    @IsFutureDateTime({ message: 'A data e hora devem estar no futuro' })
    dueDate?: Date;
}