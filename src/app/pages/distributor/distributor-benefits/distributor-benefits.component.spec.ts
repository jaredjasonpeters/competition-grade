import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorBenefitsComponent } from './distributor-benefits.component';

describe('DistributorBenefitsComponent', () => {
  let component: DistributorBenefitsComponent;
  let fixture: ComponentFixture<DistributorBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
