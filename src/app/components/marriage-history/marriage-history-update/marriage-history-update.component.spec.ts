import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageHistoryUpdateComponent } from './marriage-history-update.component';

describe('MarriageHistoryUpdateComponent', () => {
  let component: MarriageHistoryUpdateComponent;
  let fixture: ComponentFixture<MarriageHistoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarriageHistoryUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarriageHistoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
