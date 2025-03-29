import { Injectable, NotAcceptableException } from '@nestjs/common';
import { ReadProjectServiceImpl } from 'src/features/project/application/services/read/read-project-service-impl.service';
import { ReadTaskRepositoryImpl } from 'src/features/task/adapters/out/repositories/read/read-task-repository-impl.provider';
import { Task } from 'src/features/task/domain/entities/task.entity';
import { ReadTaskService } from 'src/features/task/domain/services/read-task-service';
import { ControlPagination, ResponsePagination } from 'src/root/core/pagination.core';
import { NotFoundExceptionGlobal } from 'src/root/exceptions/notfound.execptions';

@Injectable()
export class ReadTaskServiceImpl implements ReadTaskService{
    constructor(
        private readonly taskRepo: ReadTaskRepositoryImpl,
        private readonly readProjectService: ReadProjectServiceImpl
        
    ){}
    async findAll(projectUuid: string, control: ControlPagination): Promise<ResponsePagination<Task[]>> {
        const project = await this.readProjectService.findOneByUuid(projectUuid);
        return await this.taskRepo.findAllByProjectId(project.id, control);
    }

    async findOne(uuid: string): Promise<Task> {
        const taskExisting = await this.taskRepo.findByUid(uuid);
        if(!taskExisting){
            throw new NotFoundExceptionGlobal(`Não conseguimos encontrar nenhuma tarefa`)
        }
        return taskExisting;
    }
}
