import { Injectable } from '@nestjs/common';
import { CreateProjectService } from '../../../domain/services/create-project-service';
import { Project } from '../../../domain/entities/project.entity';
import { ProjectProps } from '../../../domain/repositories/create-project.repository';
import { CreateProjectRepositoryImpl } from '../../../adapters/out/repositories/create/create-project-repository-impl.provider';

@Injectable()
export class CreateProjectServiceImpl implements CreateProjectService {

  constructor(
    private readonly projectRepo: CreateProjectRepositoryImpl
  ) { }
  
  async save(data: ProjectProps, referenceExternalId: string): Promise<Project> {
    return await this.projectRepo.save(data, 1);
  }

}
