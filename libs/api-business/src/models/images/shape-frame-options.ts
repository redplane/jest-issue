import { ShapeDimensions } from "../../constants/shape-dimensions";
import { ShapeUnits } from "../../constants/shape-units";

export class ShapeFrameOptions {

  //#region Properties

  public size: number;

  public dimension: ShapeDimensions;

  public unit: ShapeUnits;

  //#endregion

  //#region Constructor

  public constructor(size: number, dimension: ShapeDimensions, unit: ShapeUnits) {
    this.size = size;
    this.dimension = dimension;
    this.unit = unit;
  }

  //#endregion
}
