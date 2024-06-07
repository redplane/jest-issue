export class UserProfile {
  //#region Constructor

  public constructor(
    public readonly username: string,
    public permissions: string[]
  ) {}

  //#endregion
}
