import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinConfirmationComponent } from './checkin-confirmation.component';

describe('CheckinConfirmationComponent', () => {
  let component: CheckinConfirmationComponent;
  let fixture: ComponentFixture<CheckinConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckinConfirmationComponent]
    });
    fixture = TestBed.createComponent(CheckinConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
