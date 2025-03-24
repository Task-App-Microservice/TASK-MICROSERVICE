import { Injectable } from '@nestjs/common';
import { ReadProjectServiceImpl } from 'src/features/project/application/services/read/read-project-service-impl.service';
import { CreateTaskRepositoryImpl } from 'src/features/task/adapters/out/repositories/create/create-task-repository-impl.provider';
import { Task } from 'src/features/task/domain/entities/task.entity';
import { TaskData } from 'src/features/task/domain/repositories/create-task-repository';
import { CreateTaskService } from 'src/features/task/domain/services/create-task-service';
import { ReadUserServiceImpl } from 'src/features/user/application/services/read/read-user-service-impl.service';

@Injectable()
export class CreateTaskServiceImpl implements  CreateTaskService {
    constructor(
        private readonly taskRepo: CreateTaskRepositoryImpl,
        private readonly readUserService: ReadUserServiceImpl,
        private readonly readProjectService: ReadProjectServiceImpl
    ){}

    async create(data: TaskData, referenceExternalId: string): Promise<Task> {
        await this.readUserService.findOne(referenceExternalId);
        await this.readProjectService.findOneById(data.projectId);
        return await this.taskRepo.save(data);
    }
}
