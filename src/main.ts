import { NestFactory } from '@nestjs/core';
import { AppTaskModule } from './root/app-task.module';

async function bootstrap() {
  const app = await NestFactory.create(AppTaskModule);
  await app.listen(process.env.port ?? 4002);
}
bootstrap();
