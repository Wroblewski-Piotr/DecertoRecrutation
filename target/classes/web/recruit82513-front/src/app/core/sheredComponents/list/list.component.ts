import { Component, OnInit, Input } from '@angular/core';
import { DeliverableComponentEnum } from '../component-supplier/DeliverableComponentEnum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  deliverableComponentEnum: DeliverableComponentEnum;
  @Input()
  objectList: Array<any>;
  @Input()
  parametersOfInnerComponent: Map<string, any>;
  @Input()
  nameOfBaseObject: string;

  // spinner parameters
  @Input()
  spinnerClassName: string;
  @Input()
  beforeSpinnerMessage: string;
  @Input()
  showSpinner: boolean;

  // parametr stylowania listy
  @Input()
  listClass: string;


  constructor() { }

  ngOnInit(): void {

    this.parametersOfInnerComponent = this.parametersOfInnerComponent != null
    ? this.parametersOfInnerComponent
    : new Map<string, any>();

    this.listClass = this.listClass != null
    ? this.listClass
    : 'list';
  }

  createExportParameters(object: any): Map<string, any> {
    const map = this.parametersOfInnerComponent;
    map.set(this.nameOfBaseObject, object);
    return map;
  }

}
