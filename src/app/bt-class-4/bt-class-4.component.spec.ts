import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtClass4Component } from './bt-class-4.component';

describe('BtClass4Component', () => {
  let component: BtClass4Component;
  let fixture: ComponentFixture<BtClass4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtClass4Component]
    });
    fixture = TestBed.createComponent(BtClass4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
