import Joi = require('joi');
import { ShapeImageOptions } from '@image-service/api-business';
import { imageFrameOptionsJoiSchema } from './image-frame-options.joi-schema';

export const processImageOptionsJoiSchema = Joi.object<ShapeImageOptions>({
  frame: imageFrameOptionsJoiSchema
})
