import { IsNotEmpty, IsString, IsUUID, Matches } from "class-validator";

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    @Matches(/^c[a-z0-9]{24}$/i, { message: "CUID inválido. Deve começar com 'c' seguido de 24 caracteres alfanuméricos." })
    referenceExternalId: string
}