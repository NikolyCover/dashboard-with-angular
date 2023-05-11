import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POwnersComponent } from './p-owners.component';

describe('POwnersComponent', () => {
  let component: POwnersComponent;
  let fixture: ComponentFixture<POwnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [POwnersComponent]
    });
    fixture = TestBed.createComponent(POwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
