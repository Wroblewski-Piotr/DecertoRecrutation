import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AplicationStorageElementEnum } from './aplicationStorageELementEnum';

@Injectable({
  providedIn: 'root'
})
export class AplicationStorageService {

  private readonly _aplicationState = new BehaviorSubject<Map<AplicationStorageElementEnum, any>>(new Map());

  get aplicationState(): Map<AplicationStorageElementEnum, any> {
    return this._aplicationState.getValue();
  }
  set aplicationState(val: Map<AplicationStorageElementEnum, any>) {
    this._aplicationState.next(val);
  }

  constructor() { }

  public getCurrentObservable(aplicationStorageElementEnum: AplicationStorageElementEnum): Observable<any> {
    return this._aplicationState.pipe<any>(
      map( x => {
        if (x.get(aplicationStorageElementEnum) == null) {
          x.set(aplicationStorageElementEnum, null);
        }
        return x.get(aplicationStorageElementEnum);
      })
    );
  }

  public getCurrent(aplicationStorageElementEnum: AplicationStorageElementEnum): any {
    return this.aplicationState.get(aplicationStorageElementEnum);
  }

  public isItCurrent(aplicationStorageElementEnum: AplicationStorageElementEnum, object: any): Observable<boolean> {
    return this.getCurrentObservable(aplicationStorageElementEnum).pipe(
      map(data => {
        return data != null && data === object;
      })
    );
  }

  public clearStorageInContext(aplicationStorageElementEnum: AplicationStorageElementEnum) {
    this.setAsCurrent(aplicationStorageElementEnum, null);
  }

  public setAsCurrent(aplicationStorageElementEnum: AplicationStorageElementEnum, element: any): boolean {
    const aplicationStateInContext = this.aplicationState.get(aplicationStorageElementEnum);
    let isItAlreadyCurrent;

    if (aplicationStateInContext != null) {
      if (aplicationStateInContext === element) {
        isItAlreadyCurrent = true;
      } else {
        this.aplicationState.set(aplicationStorageElementEnum, element);
        isItAlreadyCurrent = false;
      }
    } else {
      this.aplicationState.set(aplicationStorageElementEnum, element);
      isItAlreadyCurrent = false;
    }

    this._aplicationState.next(this.aplicationState);
    return isItAlreadyCurrent;
  }
}
