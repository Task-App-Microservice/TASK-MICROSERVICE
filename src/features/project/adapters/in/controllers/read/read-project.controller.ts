import {
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ReadProjectServiceImpl } from 'src/features/project/application/services/read/read-project-service-impl.service';
import { GlobalResponseInterceptor } from 'src/root/interceptors/global-response.interceptor';
import { CuidValidationPipe } from 'src/root/pipes/cuid-validator.pipe';

@Controller('task/project')
@UseInterceptors(GlobalResponseInterceptor)
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
  
  @Get("single/:projectCuid")
  async getProject(
    @Param('projectCuid', CuidValidationPipe) projectCuid: string,
  ){
    return{project: await this.readProjectService.findOneByUuid(projectCuid)}
  }
}
