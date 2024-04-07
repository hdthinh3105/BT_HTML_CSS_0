import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtClass1Component } from './bt-class-1.component';

describe('BtClass1Component', () => {
  let component: BtClass1Component;
  let fixture: ComponentFixture<BtClass1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtClass1Component]
    });
    fixture = TestBed.createComponent(BtClass1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
