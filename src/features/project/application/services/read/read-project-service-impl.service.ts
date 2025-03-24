import { Injectable, NotAcceptableException } from '@nestjs/common';
import { ReadProjectRepositoryImpl } from 'src/features/project/adapters/out/repositories/read/read-project-repository-impl.provider';
import { Project } from 'src/features/project/domain/entities/project.entity';
import { ReadProjectService } from 'src/features/project/domain/services/read-project-service';
import { ReadUserServiceImpl } from 'src/features/user/application/services/read/read-user-service-impl.service';
import { ControlPagination, ResponsePagination } from 'src/root/core/pagination.core';

@Injectable()
export class ReadProjectServiceImpl implements ReadProjectService {
  constructor(
    private readonly projectRepo: ReadProjectRepositoryImpl,
    private readonly readUserService: ReadUserServiceImpl,
  ){}
  async findOneById(id: number): Promise<Project> {
    const projectExisting = await this.projectRepo.findOneById(id);
    if(!projectExisting) throw new NotAcceptableException("Projecto nao encontrado");
    return projectExisting;
  }

  async findAllByExternalId(referenceExternalId: string, control: ControlPagination): Promise<ResponsePagination<Project[]>> {
    const user = await this.readUserService.findOne(referenceExternalId);  
    return await this.projectRepo.findAllByExternalId(user.id, control)
  }

  async findOneByUuid(uuid: string): Promise<Project> {
    const projectExisting = await this.projectRepo.findOneByUuid(uuid);
    if(!projectExisting) throw new NotAcceptableException("Projecto nao encontrado");
    return projectExisting
  }
}
