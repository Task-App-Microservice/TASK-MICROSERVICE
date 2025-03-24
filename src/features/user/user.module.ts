import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/root/config/database/database.module';
import { CreateUserServiceImpl } from './application/services/create/create-user-service-impl.service';
import { CreateUserRepositoryImpl } from './adapters/out/repositories/create/create-user-repository-impl.provider';
import { CreateUserController } from './adapters/in/rabbit/create/create-user.controller';
import { ReadUserServiceImpl } from './application/services/read/read-user-service-impl.service';
import { ReadUserRepositoryImpl } from './adapters/out/repositories/read/read-user-repository-impl.provider';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    CreateUserController
  ],
  providers: [
    CreateUserServiceImpl,
    CreateUserRepositoryImpl,
    ReadUserServiceImpl,
    ReadUserRepositoryImpl
  ],
  exports: [
    ReadUserServiceImpl
  ]
})
export class UserModule { }
