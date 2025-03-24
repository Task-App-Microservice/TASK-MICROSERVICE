import { Module } from '@nestjs/common';
import { CreateTaskRepositoryImpl } from './adapters/out/repositories/create/create-task-repository-impl.provider';
import { DatabaseModule } from 'src/root/config/database/database.module';
import { UserModule } from '../user/user.module';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ProjectModule
  ],
  controllers: [
     
  ],
  providers: [
    CreateTaskRepositoryImpl
  ],
  exports: []
})
export class TaskModule {}
