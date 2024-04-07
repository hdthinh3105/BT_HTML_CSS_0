import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtClass3AComponent } from './bt-class-3-a.component';

describe('BtClass3AComponent', () => {
  let component: BtClass3AComponent;
  let fixture: ComponentFixture<BtClass3AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtClass3AComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtClass3AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
