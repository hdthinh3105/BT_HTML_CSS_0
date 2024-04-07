import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1Component } from './bt-1.component';

describe('Bt1Component', () => {
  let component: Bt1Component;
  let fixture: ComponentFixture<Bt1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bt1Component]
    });
    fixture = TestBed.createComponent(Bt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
