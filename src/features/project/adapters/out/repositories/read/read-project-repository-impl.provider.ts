import { Injectable } from '@nestjs/common';
import { Project } from 'src/features/project/domain/entities/project.entity';
import { ReadProjectRepository } from 'src/features/project/domain/repositories/read-project.repository';
import { DatabaseService } from 'src/root/config/database/services/database.service';

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
}
