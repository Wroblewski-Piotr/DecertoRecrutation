import { Component, OnInit } from '@angular/core';
import { StrategyDTO } from './model/strategyDto';
import { DeliverableComponentEnum } from './core/sheredComponents/component-supplier/DeliverableComponentEnum';
import { SubjectPropagatorObject } from './core/model/SubjectPropagatorObject';
import { GlobalService } from './service/global.service';
import { ArrayUtils } from './core/utils/ArrayUtils';
import { StrategyProcessScore } from './model/StrategyProcessScore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedStrategiesChain: Array<StrategyProcessScore> = new Array<StrategyProcessScore>();
  compatybilesStrategies: Array<StrategyDTO> = new Array<StrategyDTO>();
  isCompatybilesStrategiesLoading = false;
  isSelectedStrategiesChainLoading = false;

  constructor(private golbalService: GlobalService) {}

  ngOnInit(): void {
    this.reloadCompatybilesStrategies();
  }

  reloadCompatybilesStrategies() {
    this.compatybilesStrategies = new Array<StrategyDTO>();

    this.isCompatybilesStrategiesLoading = true;
    if (this.selectedStrategiesChain.length === 0) {
      this.golbalService.getAllGenerateDataStrategy().subscribe(strategies => {
        this.compatybilesStrategies = strategies;
        this.isCompatybilesStrategiesLoading = false;
       });
    } else {
      const lastSelectedStrategy = this.selectedStrategiesChain[this.selectedStrategiesChain.length - 1].strategyDto;
      this.golbalService.getAllcompatybileProcessDataStrategies(lastSelectedStrategy.qualifier).subscribe(strategies => {
        this.compatybilesStrategies = strategies;
        this.isCompatybilesStrategiesLoading = false;
       });
    }
  }

  openAddStrategyModal() {
    this.golbalService.setPropagator(new SubjectPropagatorObject(1, null));
  }

  addToselectedStrategiesChain(strategyDTO: StrategyDTO) {
    this.selectedStrategiesChain.push(new StrategyProcessScore(strategyDTO, null));
    this.reloadCompatybilesStrategies();
  }

  deleteStrategyFromStrategiesChain(strategyProcessScore: StrategyProcessScore) {
    ArrayUtils.deleteElementFromArray(this.selectedStrategiesChain, strategyProcessScore);
    this.reloadCompatybilesStrategies();
  }

  execute() {
    this.isSelectedStrategiesChainLoading = true;
    this.golbalService.execute(this.selectedStrategiesChain).subscribe(x => {
      this.selectedStrategiesChain = x;
      this.isSelectedStrategiesChainLoading = false;
    });
  }

  deleteAllScores() {
    this.selectedStrategiesChain.forEach( x => x.processScore = null);
  }

  clearAllselectedStrategiesChain() {
    this.selectedStrategiesChain = new Array<StrategyProcessScore>();
    this.reloadCompatybilesStrategies();
  }

  isItExecuted(): boolean {
    if (this.selectedStrategiesChain.length > 0 && this.selectedStrategiesChain[0].processScore != null) {
      return true;
    } else {
      return false;
    }
  }

  createNewMap() {
    return new Map<string, any>();
  }
  getDeliverableComponentEnumAddStrategy() {
    return DeliverableComponentEnum.AddStrategy;
  }
  getDeliverableComponentEnumSelectedeStrategy() {
    return DeliverableComponentEnum.SelectedStrategy;
  }
}
