import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { CreateProjectDto } from '../../../out/dto/create-project.dto';
import { CreateProjectServiceImpl } from 'src/features/project/application/services/create/create-project-service-impl.service';

@Controller('project')
export class CreateProjectController {
  constructor(private readonly createProjectService: CreateProjectServiceImpl) {}

  @Post()
  execute(
    @Body() body: CreateProjectDto,
  ) {
    return this.createProjectService.save(body);
  }

}
