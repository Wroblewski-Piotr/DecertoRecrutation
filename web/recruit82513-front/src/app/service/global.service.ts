import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { SubjectPropagatorObject } from '../core/model/SubjectPropagatorObject';
import { StrategyDTO } from '../model/strategyDto';
import { StrategyProcessScore } from '../model/StrategyProcessScore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  // 1 - open add strategy modal
  private propagator = new Subject<SubjectPropagatorObject<any>>();

  public setPropagator(subjectPropagatorObject: SubjectPropagatorObject<any>) {
    this.propagator.next(subjectPropagatorObject);
  }
  public getPropagator(): Observable<SubjectPropagatorObject<any>> {
    return this.propagator.asObservable();
  }

  public getAllGenerateDataStrategy(): Observable<Array<StrategyDTO>> {
    return this.http.get<Array<StrategyDTO>>('/getGenerateDataStrategies');
  }

  public getAllcompatybileProcessDataStrategies(strategyQualifier: string): Observable<Array<StrategyDTO>> {
    return this.http.get<Array<StrategyDTO>>('/getCompatibleStrategies?strategyQualifier=' + strategyQualifier);
  }

  public execute(strategyProcessScore: Array<StrategyProcessScore>) {
    return this.http.get<Array<StrategyProcessScore>>('/process' + this.createParametersForExecuteUrl(strategyProcessScore)).pipe(
      map ((listOfObject: Array<object>) => {
        const listOfStrategyProcessScore = new Array<StrategyProcessScore>();
        listOfObject.forEach(x => {
          listOfStrategyProcessScore.push(StrategyProcessScore.deserialize(x));
        });
        return listOfStrategyProcessScore;
      })
    );
  }

  private createParametersForExecuteUrl(strategyProcessScore: Array<StrategyProcessScore>): string {
    let parameters = '?strategyQualifiers=';

    strategyProcessScore.forEach(x => {
      parameters = parameters + x.strategyDto.qualifier + ',';
    });

    parameters = parameters.substring(0, parameters.length - 1);

    return parameters;
  }
}
