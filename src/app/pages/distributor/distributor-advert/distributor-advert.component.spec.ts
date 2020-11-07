import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorAdvertComponent } from './distributor-advert.component';

describe('DistributorAdvertComponent', () => {
  let component: DistributorAdvertComponent;
  let fixture: ComponentFixture<DistributorAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
