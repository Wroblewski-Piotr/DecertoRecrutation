import * as uuid from 'uuid';

import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';
import { DeliverableComponentEnum } from '../component-supplier/DeliverableComponentEnum';
import { MapUtils } from '../../utils/mapUtils';
@Component({
  selector: 'MPW-CMS-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  constructor(private modalService: ModalService) { }

  @Input()
  importParameters = new Map<string, any>();

  title: string;
  deliverableComponentEnum: DeliverableComponentEnum;
  addCloseButton: boolean;
  parametersOfInnerComponent: Map<string, any>;
  zIndex: number;
  modalSizeClass: string;
  // <!-- title, selector, addCloseButton, parametersOfInnerComponent, zIndex -->
  uuid: string;
  modalId: string;
  isItOpen = false;
  openModalSubscription: Subscription;
  ngOnInit() {
    this.uuid = uuid.v4();
    this.deliverableComponentEnum = MapUtils.getParametrFromMap('deliverableComponentEnum', this.importParameters, 'ModalComponent');
    this.title = MapUtils.getParametrFromMapOrGetDefault('title', this.importParameters, '');
    this.addCloseButton = MapUtils.getParametrFromMapOrGetDefault('addCloseButton', this.importParameters, true);
    this.parametersOfInnerComponent = MapUtils.getParametrFromMapOrGetDefault('parametersOfInnerComponent', this.importParameters, new Map<string, any>());
    this.zIndex = MapUtils.getParametrFromMapOrGetDefault('zIndex', this.importParameters, 1);
    this.modalSizeClass = MapUtils.getParametrFromMapOrGetDefault('modalSizeClass', this.importParameters, 'modal-classic');
    this.parametersOfInnerComponent.set('modalUUID', this.uuid);
    this.modalId = 'myModal' + this.uuid;
    this.openModalSubscription = this.modalService.getModalPropagator().subscribe(x => {
      if (x.data === this.uuid) {
        if (x.actionId === 1) {
          this.isItOpen = true;
          this.openModal();
        }
        else if (x.actionId === 2 && this.isItOpen) {
          this.isItOpen = false;
          this.closeModalByButton();
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.openModalSubscription.unsubscribe();
  }
  openModal() {
    const modal = document.getElementById(this.modalId);
    modal.style.display = 'block';
  }
  closeModalByButton() {
    const modal = document.getElementById(this.modalId);
    modal.style.display = 'none';
    this.modalService.closeModalByUUID(this.uuid);
    this.isItOpen = false;
  }
  @HostListener('window:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modal = document.getElementById(this.modalId);
    if (event.target === modal) {
      this.modalService.closeModalByUUID(this.uuid);
      modal.style.display = 'none';
      this.isItOpen = false;
    }
  }
}

