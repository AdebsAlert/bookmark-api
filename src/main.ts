import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppClusterService } from './app_cluster.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1/');
  await app.listen(3333);
}
AppClusterService.clusterize(bootstrap);
