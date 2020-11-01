import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationProgramComponent } from './verification-program.component';

describe('VerificationProgramComponent', () => {
  let component: VerificationProgramComponent;
  let fixture: ComponentFixture<VerificationProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
