import { ShapeImageOptions } from '@image-service/api-business';

export class ProcessShapeQuery {

  //#region Properties

  public readonly source: string;

  public options: ShapeImageOptions;

  public signature: string;

  //#endregion

  //#region Constructor

  public constructor(source: string, options: ShapeImageOptions, signature: string) {
    this.source = source;
    this.options = options;
    this.signature = signature;
  }

  //#endregion

}
