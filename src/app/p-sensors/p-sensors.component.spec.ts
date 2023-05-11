import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSensorsComponent } from './p-sensors.component';

describe('PSensorsComponent', () => {
  let component: PSensorsComponent;
  let fixture: ComponentFixture<PSensorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PSensorsComponent]
    });
    fixture = TestBed.createComponent(PSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
