import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt3Component } from './bt-3.component';

describe('Bt3Component', () => {
  let component: Bt3Component;
  let fixture: ComponentFixture<Bt3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bt3Component]
    });
    fixture = TestBed.createComponent(Bt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
