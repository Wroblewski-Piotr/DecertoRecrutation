export class ArrayUtils {

  public static deleteElementFromArray(array: Array<any>, object: any): any {
    const index = array.indexOf(object, 0);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
