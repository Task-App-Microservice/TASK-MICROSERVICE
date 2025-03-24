import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserServiceImpl } from "src/features/user/application/services/create/create-user-service-impl.service";
import { CreateUserDTo } from "../../../out/create-user.dto";

@Controller()
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserServiceImpl) {}

  @MessagePattern('user_created')
  create(@Payload() body: CreateUserDTo) {
    return this.createUserService.create(body);
  }
}
