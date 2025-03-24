import { Injectable } from '@nestjs/common';
import { Project } from 'src/features/project/domain/entities/project.entity';
import {  ReadProjectRepository } from 'src/features/project/domain/repositories/read-project.repository';
import { DatabaseService } from 'src/root/config/database/services/database.service';
import { ControlPagination, ResponsePagination } from 'src/root/core/pagination.core';

@Injectable()
export class ReadProjectRepositoryImpl implements ReadProjectRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ){}
    async findOneById(id: number): Promise<Project> {
        return await this.databaseService.project.findUnique({
            where:{
                id
            }
        }) as unknown as Project;
    }

    async findAllByExternalId(userId: number, control: ControlPagination): Promise<ResponsePagination<Project[]>> {
        const skip = (control.page - 1) * control.limit;
        const [data, total] = await Promise.all([
            this.databaseService.project.findMany({
                skip,
                take: control.limit,
                where:{
                    owner:{
                        id: userId
                    }
                }
            }) as unknown as Project[],
            this.databaseService.project.count()
        ])
        return{
            results: data,
            meta:{
              total,
            page: control.page  
            }
        }
    }

    async findOneByUuid(uuid: string): Promise<Project> {
        return await this.databaseService.project.findUnique({
            where:{
                uuid
            }
        }) as unknown as Project;
    }
}
