import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class CuidValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!/^c[a-z0-9]{24}$/i.test(value)) {
      throw new BadRequestException("CUID inválido.");
    }
    return value;
  }
}