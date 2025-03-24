import {
  Body,
  Controller,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from '../../out/dto/create-task.dto';
import { CreateTaskServiceImpl } from 'src/features/task/application/services/create/create-tast-service-impl.service';

@Controller('task/create')
export class CreateTaskController {
  constructor(private readonly createTaskService: CreateTaskServiceImpl) { }

  @Post(":referenceExternalId")
  async create(
    @Param("referenceExternalId") referenceExternalId: string,
    @Body() body: CreateTaskDto) {
    return await this.createTaskService.create(body, referenceExternalId);
  }
}
