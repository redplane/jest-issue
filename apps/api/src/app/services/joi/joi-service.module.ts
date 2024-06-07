import { Module } from '@nestjs/common';
import { JoiService } from './joi.service';
import { AppInjectors } from '../../constants/app-injectors';

@Module({
  providers: [
    {
      provide: AppInjectors.SERVICE__JOI,
      useClass: JoiService
    }
  ],
  exports: [AppInjectors.SERVICE__JOI],
})
export class JoiServiceModule {

}
