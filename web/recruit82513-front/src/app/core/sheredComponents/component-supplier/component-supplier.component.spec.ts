import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSupplierComponent } from './component-supplier.component';

describe('ComponentSupplierComponent', () => {
  let component: ComponentSupplierComponent;
  let fixture: ComponentFixture<ComponentSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
