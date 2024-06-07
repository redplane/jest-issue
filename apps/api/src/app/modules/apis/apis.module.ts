import { Module } from '@nestjs/common';
import { ShapeModule } from './shape';

@Module({
  imports: [ShapeModule],
})
export class ApisModule {}
