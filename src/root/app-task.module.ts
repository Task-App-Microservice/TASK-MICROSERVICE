import { Module } from '@nestjs/common';
import { TaskModule } from '../features/task/task.module';

@Module({
  imports: [
    TaskModule
  ],
})
export class AppTaskModule {}
