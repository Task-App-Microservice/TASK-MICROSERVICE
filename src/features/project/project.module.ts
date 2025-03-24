import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../root/config/database/database.module';
import { ReadProjectRepositoryImpl } from './adapters/out/repositories/read/read-project-repository-impl.provider';
import { CreateProjectServiceImpl } from './application/services/create/create-project-service-impl.service';
import { CreateProjectRepositoryImpl } from './adapters/out/repositories/create/create-project-repository-impl.provider';
import { ReadProjectServiceImpl } from './application/services/read/read-project-service-impl.service';
import { UserModule } from '../user/user.module';
import { CreateProjectController } from './adapters/in/controllers/create/create-project.controller';
import { ReadProjectController } from './adapters/in/controllers/read/read-project.controller';

@Module({
  imports: [
    DatabaseModule,
    UserModule
  ],
  controllers: [
    CreateProjectController,
    ReadProjectController
  ],
  providers: [
    ReadProjectRepositoryImpl,
    CreateProjectServiceImpl,
    CreateProjectRepositoryImpl,
    ReadProjectServiceImpl
  ],
  exports: [
    ReadProjectServiceImpl
  ]
})
export class ProjectModule {}
