/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { EnvironmentVariables } from './app/constants';
import * as process from 'process';

async function bootstrap() {
  const port = process.env[EnvironmentVariables.PORT] || 3000;

  const app = await NestFactory.create(AppModule, {
  });
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}


void bootstrap();
