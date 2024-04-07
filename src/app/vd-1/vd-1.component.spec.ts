import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd1Component } from './vd-1.component';

describe('Vd1Component', () => {
  let component: Vd1Component;
  let fixture: ComponentFixture<Vd1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vd1Component]
    });
    fixture = TestBed.createComponent(Vd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
