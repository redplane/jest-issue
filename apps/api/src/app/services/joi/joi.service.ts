import { IJoiService } from './joi-service.interface';
import { Injectable } from '@nestjs/common';
import Joi = require('joi');
import { ValidationException } from '../../models/exceptions/validation.exception';
import { ValidationIssue } from '../../models/exceptions/validation-issue';

@Injectable()
export class JoiService implements IJoiService {

  //#region Methods

  public async validateAsync<T>(instance: T, schema: Joi.Schema<T>): Promise<T> {
    try {
      return await schema.validateAsync(instance, {convert: true});
    } catch (exception) {
      if (exception['details'] && exception['details'] instanceof Array ) {
        const details = exception['details'];
        const issues = details.map(x => new ValidationIssue(x.message));
        throw new ValidationException(issues);
      }
      throw exception;
    }
  }

  //#endregion

}
