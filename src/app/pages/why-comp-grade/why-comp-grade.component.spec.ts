import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCompGradeComponent } from './why-comp-grade.component';

describe('WhyCompGradeComponent', () => {
  let component: WhyCompGradeComponent;
  let fixture: ComponentFixture<WhyCompGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyCompGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCompGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
