import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DeliverableComponentEnum } from './DeliverableComponentEnum';
import { DeliverableComponentsStore } from './DeliverableComponentsStore';


@Component({
  selector: 'MPW-CMS-component-supplier',
  templateUrl: './component-supplier.component.html',
  styleUrls: ['./component-supplier.component.css']
})
export class ComponentSupplierComponent implements OnInit, AfterViewInit {

  @ViewChild('vf', {read: ViewContainerRef})
  vf: ViewContainerRef;

  @Input()
  deliverableComponentEnum: DeliverableComponentEnum;
  @Input()
  importParameters = new Map<string, any>();


  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef){
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    const resolver = this.componentFactoryResolver.resolveComponentFactory
    (DeliverableComponentsStore.deliverableComponentsMap.get(this.deliverableComponentEnum));

    const componentFactory =   this.vf.createComponent(resolver);

    componentFactory.instance['importParameters'] = this.importParameters;

    this.cdr.detectChanges();
  }

}
