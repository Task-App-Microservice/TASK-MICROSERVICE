import { Injectable } from '@nestjs/common';
import { Task } from 'src/features/task/domain/entities/task.entity';
import { ReadTaskRepository } from 'src/features/task/domain/repositories/read-task-repository';
import { DatabaseService } from 'src/root/config/database/services/database.service';
import { ControlPagination, ResponsePagination } from 'src/root/core/pagination.core';

@Injectable()
export class ReadTaskRepositoryImpl implements ReadTaskRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async findAllByProjectId(projectId: number, control: ControlPagination): Promise<ResponsePagination<Task[]>> {
        const skip = (control.page - 1) * control.limit;
        const [data, total] = await Promise.all([
            this.databaseService.task.findMany({
                skip,
                take: control.limit,
                where: {
                    project: {
                        id: projectId
                    }
                }
            }) as unknown as Task[],
            this.databaseService.project.count()
        ])
        return {
            results: data,
            meta: {
                total,
                page: control.page
            }
        }
    }
}
