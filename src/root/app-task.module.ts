import { Module } from '@nestjs/common';
import { TaskModule } from '../features/task/task.module';
import { RabbitModule } from './rabbit/rabbit.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/features/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    RabbitModule,
    TaskModule,
    UserModule
  ],
})
export class AppTaskModule { }
