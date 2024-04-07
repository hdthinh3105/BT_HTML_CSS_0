import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtClass3BComponent } from './bt-class-3-b.component';

describe('BtClass3BComponent', () => {
  let component: BtClass3BComponent;
  let fixture: ComponentFixture<BtClass3BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtClass3BComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtClass3BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
