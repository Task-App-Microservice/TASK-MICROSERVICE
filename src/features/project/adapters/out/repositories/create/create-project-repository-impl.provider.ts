import { Injectable } from '@nestjs/common';
import { CreateProjectRepository, ProjectProps } from '../../../../domain/repositories/create-project.repository';
import { Project } from '../../../../domain/entities/project.entity';
import { DatabaseService } from 'src/root/config/database/services/database.service';

@Injectable()
export class CreateProjectRepositoryImpl implements CreateProjectRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ){}
    async save(data: ProjectProps, ownerId: number): Promise<Project> {
        return await this.databaseService.project.create({
            data:{
                ...data,
                ownerId,
                participants:{
                    create: {
                        userId: ownerId
                    }
                }
            }
        }) as unknown as Project;
    }
}
