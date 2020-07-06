import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { SubjectPropagatorObject } from '../../model/SubjectPropagatorObject';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalPropagator = new Subject<SubjectPropagatorObject<any>>();
  // 1 - open modal
  // 2 - close modal

  constructor() { }

  public setModalPropagator(subjectPropagatorObject: SubjectPropagatorObject<string>) {
    this.modalPropagator.next(subjectPropagatorObject);
  }
  public getModalPropagator(): Observable<SubjectPropagatorObject<string>> {
    return this.modalPropagator.asObservable();
  }

  public openModalByUUID(modalUUID: string) {
    if (modalUUID != null) {
      this.setModalPropagator(new SubjectPropagatorObject(1, modalUUID));
    }
  }
  public closeModalByUUID(modalUUID: string) {
    if (modalUUID != null) {
      this.setModalPropagator(new SubjectPropagatorObject(2, modalUUID));
    }
  }
}
