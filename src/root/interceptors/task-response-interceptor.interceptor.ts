import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { Task } from 'src/features/task/domain/entities/task.entity';
import { ScheduleService } from '../infra/redis/services/schedule.service';

@Injectable()
export class TaskResponseInterceptor implements NestInterceptor {
  constructor(
    private readonly schedule: ScheduleService
  ){}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(async (task: Task)=>{
        if(task && task.dueDate){
          console.log(task.dueDate)
          await this.schedule.scheduleTask(task.title, task.dueDate)
        }
      }),
      map((data) => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        success: true,
        detail: "Tarefa criada com sucesso!",
        data: {
          newTask: data
        },
        metadata: {
          type: "object",
          version: "v-1"
        },
        error: null,
        timestamp: new Date().toISOString(),
      })),
    ); 
  }
}
