import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ReadTaskServiceImpl } from 'src/features/task/application/services/read/read-tast-service-impl.service';
import { GlobalResponseInterceptor } from 'src/root/interceptors/global-response.interceptor';
import { CuidValidationPipe } from 'src/root/pipes/cuid-validator.pipe';

@Controller('task')
export class ReadTaskController {
  constructor(private readonly readTaskService: ReadTaskServiceImpl) { }

  @Get("all/:projectId")
  @UseInterceptors(GlobalResponseInterceptor)
  async findALl(
    @Param('projectId', CuidValidationPipe) projectId: string,
    @Query("page") page: string,
    @Query("limit") limit: string,
  ) {
    return await this.readTaskService.findAll(projectId, {
      page: +page || 1,
      limit: +limit || 10
    })
  }

  @Get("single/:uuid")
  @UseInterceptors(GlobalResponseInterceptor)
  async findOne(
    @Param('uuid', CuidValidationPipe) uuid: string,
  ) {
    return{task: await this.readTaskService.findOne(uuid)}
  }

}
