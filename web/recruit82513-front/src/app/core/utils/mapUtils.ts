import { LogUtils } from './logUtils';

export class MapUtils {

  public static getParametrFromMap(parametrName: string, parametersMap: Map<string, any>, className: string): any {
    const parametr: any = parametersMap.get(parametrName);
    if (parametr === undefined) {
      LogUtils.log('In pass map cant find parameter with name - ' + parametrName, className);
    }
    return parametr;
  }

  public static getParametrFromMapOrGetDefault(parametrName: string, parametersMap: Map<string, any>, defaultValue: any): any{
    const parametr: any = parametersMap.get(parametrName);
    if (parametr === undefined) {
      return defaultValue;
    }
    return parametr;
  }

  public static objToMap(obj): Map<string, Array<string>> {
    const map: Map<string, Array<string>> = new Map();
    for (const k of Object.keys(obj)) {
      map.set(k, obj[k]);
    }
    return map;
  }

  public static getArrayFromMap(map: Map<any, any>, name: any): Array<any> {
    return map.get(name) !== undefined ? map.get(name) : new Array();
  }

  public static getValuesListFromMap(map: Map<string, any>): Array<any> {
    return Array.from(map, ([key, value]) => value);
  }

  public static getKeysListFromMap(map: Map<string, any>): Array<string> {
    return Array.from(map, ([key, value]) => key);
  }
}
