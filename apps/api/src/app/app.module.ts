import { Module } from '@nestjs/common';
import { ApisModule } from './modules/apis/apis.module';

@Module({
  imports: [ApisModule]
})
export class AppModule {
}
