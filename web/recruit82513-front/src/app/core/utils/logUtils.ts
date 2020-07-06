export class LogUtils {

  public static log(msg: string, componentClassName: string) {
    console.log(new Date() + ': ' + componentClassName + ': '
      + JSON.stringify(msg));
  }
}
