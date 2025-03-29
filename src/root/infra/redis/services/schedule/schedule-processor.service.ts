import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('schedule')
export class ScheduleProcessor extends WorkerHost {
  async process(job: Job) {
    console.log(`Executando tarefa: ${job.name}`, job.data);
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    console.log(`Tarefa ${job.id} concluída.`);
  }
}
