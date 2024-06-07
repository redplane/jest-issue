import { Controller, Get, Inject, Query, Scope } from '@nestjs/common';
import { ProcessShapeQuery } from '../../../models/dtos/images/process-shape.query';
import { processImageQueryJoiSchema } from '../../../validators/process-image-query.joi-schema';
import { IJoiService } from '../../../services/joi/joi-service.interface';
import { AppInjectors } from '../../../constants/app-injectors';
import {
  ShapeDimensions,
  ShapeFrameOptions,
} from '@image-service/api-business';

@Controller({
  path: 'api/shape',
  scope: Scope.REQUEST,
})
export class ShapeController {
  //#region Constructor

  public constructor(
    @Inject(AppInjectors.SERVICE__JOI)
    private readonly __joiService: IJoiService
  ) {}

  //#endregion

  //#region Methods
  @Get()
  public async processAsync(@Query() query: ProcessShapeQuery): Promise<void> {
    // Do the parameter validation
    console.log(ShapeDimensions);
    await this.__joiService.validateAsync(query, processImageQueryJoiSchema);
  }

  //#endregion
}
