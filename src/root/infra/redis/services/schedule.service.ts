import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import 'moment/locale/pt-br';

const moment = require('moment');

@Injectable()
export class ScheduleService {
  constructor(@InjectQueue('schedule') private scheduleQueue: Queue) {}

  async scheduleTask(taskName: string, executeAt: Date) {
    console.log("data", executeAt) 
    const delay = executeAt.getTime() - Date.now();
    const m = moment().format(String(executeAt)); 
    await this.scheduleQueue.add('executeTask', 
      { 
        task: taskName,
        dataTask: m
       }, 
      { delay } // Converte para milissegundos
    );
  }
}
