import { Component, OnInit, Input } from '@angular/core';
import { StrategyDTO } from 'src/app/model/strategyDto';
import { MapUtils } from 'src/app/core/utils/mapUtils';
import { AppComponent } from 'src/app/app.component';
import { StrategyProcessScore } from 'src/app/model/StrategyProcessScore';

@Component({
  selector: 'app-selected-strategy',
  templateUrl: './selected-strategy.component.html',
  styleUrls: ['./selected-strategy.component.css']
})
export class SelectedStrategyComponent implements OnInit {

  @Input()
  importParameters = new Map<string, any>();

  strategyProcessScore: StrategyProcessScore;
  parentComponent: AppComponent;

  onlyGetDataStrategy: boolean;

  constructor() { }

  ngOnInit(): void {
    this.strategyProcessScore = MapUtils.getParametrFromMap('strategyProcessScore', this.importParameters, 'SelectedStrategyComponent');
    this.parentComponent = MapUtils.getParametrFromMap('parentComponent', this.importParameters, 'SelectedStrategyComponent');
  }

  amILast() {
    return this.strategyProcessScore === this.parentComponent.selectedStrategiesChain[this.parentComponent.selectedStrategiesChain.length - 1];
  }

}
