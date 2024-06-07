import { DynamicModule, Module } from '@nestjs/common';
import { AppModule } from '@image-service/api';

@Module({
  imports: [AppModule],
  providers: [],
})
export class TestAppModule {}
