import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from 'src/features/project/project.module';
import { UserModule } from 'src/features/user/user.module';
import { TaskModule } from '../features/task/task.module';
import { RabbitModule } from './infra/rabbit/rabbit.module';
import { RedisModule } from './infra/redis/redis.module';

@Module({
  imports: [RedisModule,
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'redis',
        port: Number(process.env.REDIS_PORT) || 6379,
      },
    }),
    RabbitModule,
    TaskModule,
    UserModule,
    ProjectModule
  ],
})
export class AppTaskModule { }
