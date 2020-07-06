import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/core/sheredComponents/modal/modal.service';
import { GlobalService } from 'src/app/service/global.service';
import { Subscription } from 'rxjs';
import { StrategyDTO } from 'src/app/model/strategyDto';
import { AppComponent } from 'src/app/app.component';
import { MapUtils } from 'src/app/core/utils/mapUtils';

@Component({
  selector: 'app-add-strategy',
  templateUrl: './add-strategy.component.html',
  styleUrls: ['./add-strategy.component.css']
})
export class AddStrategyComponent implements OnInit, OnDestroy {

  @Input()
  importParameters = new Map<string, any>();

  parentComponent: AppComponent;

  openAddNewObjectSubscription: Subscription;

  constructor(private globalService: GlobalService,
              private modalService: ModalService) { }

  ngOnInit(): void {

    this.parentComponent = MapUtils.getParametrFromMap('parentComponent', this.importParameters, 'SelectedStrategyComponent');

    this.openAddNewObjectSubscription = this.globalService.getPropagator().subscribe(subjectPropagatorObject => {
      if (subjectPropagatorObject.actionId === 1) {
        this.modalService.openModalByUUID(this.importParameters.get('modalUUID'));
      }
    });
  }

  ngOnDestroy(): void {
    this.openAddNewObjectSubscription.unsubscribe();
  }

}
