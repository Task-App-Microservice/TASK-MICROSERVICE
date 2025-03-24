import {
  Body,
  Controller,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from '../../out/dto/create-task.dto';
import { CreateTaskServiceImpl } from 'src/features/task/application/services/create/create-tast-service-impl.service';
import { CuidValidationPipe } from 'src/root/pipes/cuid-validator.pipe';

@Controller('task/create')
export class CreateTaskController {
  constructor(private readonly createTaskService: CreateTaskServiceImpl) { }

  @Post(":referenceExternalId")
  async create(
    @Param("referenceExternalId", CuidValidationPipe) referenceExternalId: string,
    @Body() body: CreateTaskDto) {
    return await this.createTaskService.create(body, referenceExternalId);
  }
}
