import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
          queue: 'user_task',
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class RabbitModule {}
