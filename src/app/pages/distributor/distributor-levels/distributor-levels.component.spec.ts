import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorLevelsComponent } from './distributor-levels.component';

describe('DistributorLevelsComponent', () => {
  let component: DistributorLevelsComponent;
  let fixture: ComponentFixture<DistributorLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
