import { Module } from '@nestjs/common';
import { CreateTaskRepositoryImpl } from './adapters/out/repositories/create/create-task-repository-impl.provider';
import { DatabaseModule } from 'src/root/config/database/database.module';
import { UserModule } from '../user/user.module';
import { ProjectModule } from '../project/project.module';
import { ReadTaskController } from './adapters/in/read/read-task.controller';
import { ReadTaskServiceImpl } from './application/services/read/read-tast-service-impl.service';
import { ReadTaskRepositoryImpl } from './adapters/out/repositories/read/read-task-repository-impl.provider';
import { CreateTaskController } from './adapters/in/create/create-task.controller';
import { CreateTaskServiceImpl } from './application/services/create/create-tast-service-impl.service';
import { BullModule } from '@nestjs/bullmq';
import { RedisModule } from 'src/root/infra/redis/redis.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ProjectModule,
   // RedisModule
  ],
  controllers: [
    ReadTaskController,
    CreateTaskController
  ],
  providers: [
    CreateTaskRepositoryImpl,
    ReadTaskRepositoryImpl,
    ReadTaskServiceImpl,
    CreateTaskServiceImpl
  ],
  exports: []
})
export class TaskModule { }
