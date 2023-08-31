import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresonalInfoComponent } from './presonal-info.component';

describe('PresonalInfoComponent', () => {
  let component: PresonalInfoComponent;
  let fixture: ComponentFixture<PresonalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresonalInfoComponent]
    });
    fixture = TestBed.createComponent(PresonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
