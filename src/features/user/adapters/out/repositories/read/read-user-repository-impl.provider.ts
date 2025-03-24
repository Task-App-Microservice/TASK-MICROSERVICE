import { Injectable } from '@nestjs/common';
import { ReadUserRepository } from '../../../../domain/repositories/read-user-repository';
import { DatabaseService } from 'src/root/config/database/services/database.service';
import { User } from 'src/features/user/domain/entities/user.entity';

@Injectable()
export class ReadUserRepositoryImpl implements ReadUserRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async findOneByReferenceExternalId(referenceExternalId: string): Promise<User> {
        return await this.databaseService.user.findUnique({
            where:{
                referenceExternalId
            }
        }) as User;
    }
}
