import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveAppointmentPageComponent } from './reserve-appointment-page.component';

describe('ReserveAppointmentPageComponent', () => {
  let component: ReserveAppointmentPageComponent;
  let fixture: ComponentFixture<ReserveAppointmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveAppointmentPageComponent]
    });
    fixture = TestBed.createComponent(ReserveAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
