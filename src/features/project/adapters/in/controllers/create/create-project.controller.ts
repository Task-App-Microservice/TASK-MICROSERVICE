import {
  Body,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateProjectDto } from '../../../out/dto/create-project.dto';
import { CreateProjectServiceImpl } from 'src/features/project/application/services/create/create-project-service-impl.service';
import { GlobalResponseInterceptor } from 'src/root/interceptors/global-response.interceptor';

@Controller('task/project')
@UseInterceptors(GlobalResponseInterceptor)
export class CreateProjectController {
  constructor(private readonly createProjectService: CreateProjectServiceImpl) {}

  @Post()
  execute(
    @Body() body: CreateProjectDto,
  ) {
    return this.createProjectService.save(body);
  }

}
