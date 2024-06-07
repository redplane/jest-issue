import Joi = require('joi');
import { ShapeDimensions, ShapeFrameOptions, ShapeUnits } from '@image-service/api-business';


export const imageFrameOptionsJoiSchema =  Joi.object<ShapeFrameOptions>({
  size: Joi.number().min(1),
  unit: Joi.any().valid(ShapeUnits.PIXEL),
  dimension: Joi.any().valid(ShapeDimensions.HEIGHT, ShapeDimensions.WIDTH)
});

