import { Injectable } from '@nestjs/common';
import { Task } from 'src/features/task/domain/entities/task.entity';
import { CreateTaskRepository, TaskData } from 'src/features/task/domain/repositories/create-task-repository';
import { DatabaseService } from 'src/root/config/database/services/database.service';

@Injectable()
export class CreateTaskRepositoryImpl implements CreateTaskRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ){}
    async save(data: TaskData): Promise<Task> {
        const {userId, ...dataTran} = data
        return await this.databaseService.task.create({
            data:{
                ...dataTran,
            }
        }) as unknown as Task;
    }
}
