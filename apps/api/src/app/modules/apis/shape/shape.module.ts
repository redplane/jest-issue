import { Module } from '@nestjs/common';
import { ShapeController } from './shape.controller';
import { JoiServiceModule } from '../../../services/joi/joi-service.module';

@Module({
  imports: [JoiServiceModule],
  controllers: [ShapeController],
})
export class ShapeModule {}
