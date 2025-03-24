import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ReadTaskServiceImpl } from 'src/features/task/application/services/read/read-tast-service-impl.service';

@Controller('task')
export class ReadTaskController {
  constructor(private readonly readTaskService: ReadTaskServiceImpl) { }

  @Get("all/:projectId")
  async findALl(
    @Param('projectId') projectId: string,
    @Query("page") page: string,
    @Query("limit") limit: string,
  ) {
    return await this.readTaskService.findAll(projectId, {
      page: +page || 1,
      limit: +limit || 10
    })
  }

}
