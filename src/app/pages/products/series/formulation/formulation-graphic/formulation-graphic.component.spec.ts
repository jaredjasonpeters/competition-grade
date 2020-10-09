import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulationGraphicComponent } from './formulation-graphic.component';

describe('FormulationGraphicComponent', () => {
  let component: FormulationGraphicComponent;
  let fixture: ComponentFixture<FormulationGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulationGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulationGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
