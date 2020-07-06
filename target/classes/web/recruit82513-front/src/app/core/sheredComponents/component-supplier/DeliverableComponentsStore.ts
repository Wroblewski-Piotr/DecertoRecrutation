import { DeliverableComponentEnum } from './DeliverableComponentEnum';
import { SelectedStrategyComponent } from 'src/app/components/selected-strategy/selected-strategy.component';
import { AddStrategyComponent } from 'src/app/components/add-strategy/add-strategy.component';

export class DeliverableComponentsStore {

  static deliverableComponentsMap = new Map<DeliverableComponentEnum, any>()
  .set(DeliverableComponentEnum.SelectedStrategy, SelectedStrategyComponent)
  .set(DeliverableComponentEnum.AddStrategy, AddStrategyComponent);

}

