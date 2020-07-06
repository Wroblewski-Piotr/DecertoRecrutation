import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedStrategyComponent } from './selected-strategy.component';

describe('SelectedStrategyComponent', () => {
  let component: SelectedStrategyComponent;
  let fixture: ComponentFixture<SelectedStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
