import { Injectable } from '@nestjs/common';
import { CreateUserData, CreateUserRepository } from '../../../../domain/repositories/create-user-repository';
import { DatabaseService } from 'src/root/config/database/services/database.service';
import { User } from 'src/features/user/domain/entities/user.entity';

@Injectable()
export class CreateUserRepositoryImpl implements CreateUserRepository {
    constructor(
        private readonly databaseService: DatabaseService,
    ){}

    async save(data: CreateUserData): Promise<User> {
        return await this.databaseService.user.create({
            data:{
                ...data
            }
        })
    }
}
