import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  logger.log('hey');
  await app.listen(3000);
}

bootstrap();
