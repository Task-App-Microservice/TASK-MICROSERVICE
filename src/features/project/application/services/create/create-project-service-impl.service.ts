import { Injectable } from '@nestjs/common';
import { CreateProjectService } from '../../../domain/services/create-project-service';
import { Project } from '../../../domain/entities/project.entity';
import { ProjectProps } from '../../../domain/repositories/create-project.repository';
import { CreateProjectRepositoryImpl } from '../../../adapters/out/repositories/create/create-project-repository-impl.provider';
import { ReadUserServiceImpl } from 'src/features/user/application/services/read/read-user-service-impl.service';

@Injectable()
export class CreateProjectServiceImpl implements CreateProjectService {

  constructor(
    private readonly projectRepo: CreateProjectRepositoryImpl,
    private readonly readUserService: ReadUserServiceImpl,
  ) { }
  
  async save(data: ProjectProps): Promise<Project> {
    const user = await this.readUserService.findOne(data.referenceExternalId);
    return await this.projectRepo.save(data, user.id);
  }

}
