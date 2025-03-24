import {
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { ReadProjectServiceImpl } from 'src/features/project/application/services/read/read-project-service-impl.service';
import { CuidValidationPipe } from 'src/root/pipes/cuid-validator.pipe';

@Controller('task/project')
export class ReadProjectController {
  constructor(private readonly readProjectService: ReadProjectServiceImpl) {}

  @Get("all/:referenceExternalId")
  findALl(
    @Param('referenceExternalId', CuidValidationPipe) referenceExternalId: string,
    @Query("page") page : string,
    @Query("limit") limit: string,

  ) {
    return this.readProjectService.findAllByExternalId(
      referenceExternalId,
      {
        page: +page || 1,
        limit: +limit || 10
      }
    );
  }

}
