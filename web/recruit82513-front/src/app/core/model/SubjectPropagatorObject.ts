export class SubjectPropagatorObject<T> {

  constructor(actionId: number, data: T) {
    this.actionId = actionId;
    this.data = data;
  }

  public actionId: number;
  public data: T;
}
