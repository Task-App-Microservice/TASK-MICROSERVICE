import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateProjectDto } from '../../../out/dto/create-project.dto';
import { CreateProjectServiceImpl } from 'src/features/project/application/services/create/create-project-service-impl.service';

@Controller('create-projects')
export class CreateProjectController {
  constructor(private readonly createProjectService: CreateProjectServiceImpl) {}

  @Post()
  execute(
    @Param("user_uuid", new ParseUUIDPipe()) referenceExternalId: string, 
    @Body() body: CreateProjectDto,
  ) {
    return this.createProjectService.save(body,referenceExternalId);
  }

}
