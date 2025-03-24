import { Injectable, Logger } from '@nestjs/common';
import { CreateUserRepositoryImpl } from 'src/features/user/adapters/out/repositories/create/create-user-repository-impl.provider';
import { User } from 'src/features/user/domain/entities/user.entity';
import { CreateUserData } from 'src/features/user/domain/repositories/create-user-repository';
import { CreateUserService } from 'src/features/user/domain/services/create-user-service';

@Injectable()
export class CreateUserServiceImpl implements CreateUserService {
  constructor(
    private readonly userRepo: CreateUserRepositoryImpl
  ) { }
  private readonly logger = new Logger(CreateUserServiceImpl.name);

  async create(data: CreateUserData): Promise<User> {
     this.logger.debug("Criando usaurio", data)
    return await this.userRepo.save(data);
  }

}
