import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ScheduleService } from './services/schedule.service';
import { ScheduleProcessor } from './services/schedule/schedule-processor.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'schedule',
    }),
  ],
  controllers: [],
  providers: [
    ScheduleService,
    ScheduleProcessor
  ],
  exports: [
    ScheduleService
  ]
})
export class RedisModule {}
