import { Injectable, NotFoundException } from '@nestjs/common';
import { ReadUserRepositoryImpl } from 'src/features/user/adapters/out/repositories/read/read-user-repository-impl.provider';
import { User } from 'src/features/user/domain/entities/user.entity';
import { ReadUserService } from 'src/features/user/domain/services/read-user-service';

@Injectable()
export class ReadUserServiceImpl implements ReadUserService {
  constructor(
    private readonly readUserRepo: ReadUserRepositoryImpl
  ){}

  async findOne(referenceExternalId: string): Promise<User> {
      const userExisting = await this.readUserRepo.findOneByReferenceExternalId(referenceExternalId);
      if(!userExisting) {
        throw new NotFoundException('usuario nao encontrado');
      }
      return userExisting;
  }
}
