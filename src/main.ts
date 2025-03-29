import { NestFactory } from '@nestjs/core';
import { AppTaskModule } from './root/app-task.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppTaskModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL ||'amqp://localhost:5672'],
      queue: 'tasks_queue',
      queueOptions: { 
        durable: true, 
      },
    },
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      enableDebugMessages: true,
    }),
  ); 
  await app.startAllMicroservices();
  await app.listen(process.env.port ?? 4002);
}
bootstrap();
