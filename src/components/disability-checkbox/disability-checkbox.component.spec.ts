import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityCheckboxComponent } from './disability-checkbox.component';

describe('DisabilityCheckboxComponent', () => {
  let component: DisabilityCheckboxComponent;
  let fixture: ComponentFixture<DisabilityCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisabilityCheckboxComponent]
    });
    fixture = TestBed.createComponent(DisabilityCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
