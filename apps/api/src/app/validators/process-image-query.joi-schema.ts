import Joi = require('joi');
import { processImageOptionsJoiSchema } from './process-image-options.joi-schema';
import { ProcessShapeQuery } from '../models/dtos/images/process-shape.query';
import { ShapeFrameOptions } from '@image-service/api-business';

console.log('ShapeFrameOptions: ');
console.log(ShapeFrameOptions);

export const processImageQueryJoiSchema = Joi.object<ProcessShapeQuery>({
  source: Joi.string().required(),
  signature: Joi.string().required(),
  options: processImageOptionsJoiSchema,
});
