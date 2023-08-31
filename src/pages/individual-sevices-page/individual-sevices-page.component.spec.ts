import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSevicesPageComponent } from './individual-sevices-page.component';

describe('IndividualSevicesPageComponent', () => {
  let component: IndividualSevicesPageComponent;
  let fixture: ComponentFixture<IndividualSevicesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualSevicesPageComponent]
    });
    fixture = TestBed.createComponent(IndividualSevicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
