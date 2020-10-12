import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulationBreakdownComponent } from './formulation-breakdown.component';

describe('FormulationBreakdownComponent', () => {
  let component: FormulationBreakdownComponent;
  let fixture: ComponentFixture<FormulationBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulationBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulationBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
