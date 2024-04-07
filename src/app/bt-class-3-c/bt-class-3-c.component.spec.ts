import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtClass3CComponent } from './bt-class-3-c.component';

describe('BtClass3CComponent', () => {
  let component: BtClass3CComponent;
  let fixture: ComponentFixture<BtClass3CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtClass3CComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtClass3CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
