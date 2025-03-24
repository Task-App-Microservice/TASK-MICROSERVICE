import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/root/config/database/database.module';
import { CreateUserServiceImpl } from './application/services/create/create-user-service-impl.service';
import { CreateUserRepositoryImpl } from './adapters/out/repositories/create/create-user-repository-impl.provider';
import { CreateUserController } from './adapters/in/rabbit/create/create-user.controller';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    CreateUserController
  ],
  providers: [
    CreateUserServiceImpl,
    CreateUserRepositoryImpl
  ],
  exports: []
})
export class UserModule { }
