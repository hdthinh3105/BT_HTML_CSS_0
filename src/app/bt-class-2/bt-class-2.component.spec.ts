import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtClass2Component } from './bt-class-2.component';

describe('BtClass2Component', () => {
  let component: BtClass2Component;
  let fixture: ComponentFixture<BtClass2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtClass2Component]
    });
    fixture = TestBed.createComponent(BtClass2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
