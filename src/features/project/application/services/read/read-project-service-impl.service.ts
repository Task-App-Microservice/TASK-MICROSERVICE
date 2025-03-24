import { Injectable, NotAcceptableException } from '@nestjs/common';
import { ReadProjectRepositoryImpl } from 'src/features/project/adapters/out/repositories/read/read-project-repository-impl.provider';
import { Project } from 'src/features/project/domain/entities/project.entity';
import { ReadProjectService } from 'src/features/project/domain/services/read-project-service';

@Injectable()
export class ReadProjectServiceImpl implements ReadProjectService {
  constructor(
    private readonly projectRepo: ReadProjectRepositoryImpl
  ){}
  async findOneById(id: number): Promise<Project> {
    const projectExisting = await this.projectRepo.findOneById(id);
    if(!projectExisting) throw new NotAcceptableException("Projecto nao encontrado");
    return projectExisting;
  }
}
