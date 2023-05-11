import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PConfigComponent } from './p-config.component';

describe('PConfigComponent', () => {
  let component: PConfigComponent;
  let fixture: ComponentFixture<PConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PConfigComponent]
    });
    fixture = TestBed.createComponent(PConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
