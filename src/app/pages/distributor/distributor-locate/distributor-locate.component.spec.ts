import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorLocateComponent } from './distributor-locate.component';

describe('DistributorLocateComponent', () => {
  let component: DistributorLocateComponent;
  let fixture: ComponentFixture<DistributorLocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorLocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorLocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
