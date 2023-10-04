import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAlertComponent } from './information-alert.component';

describe('InformationAlertComponent', () => {
  let component: InformationAlertComponent;
  let fixture: ComponentFixture<InformationAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationAlertComponent]
    });
    fixture = TestBed.createComponent(InformationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
