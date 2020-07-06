export class StrategyDTO {
  qualifier: string;
  description: string;

  public static deserialize(input: any) {
    if (input == null) {
      return null;
    }
    const object = new this();

    object.description = input.description;
    object.qualifier = input.qualifier;

    return object;
  }
}
