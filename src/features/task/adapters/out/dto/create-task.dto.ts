import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Matches } from "class-validator";

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
}