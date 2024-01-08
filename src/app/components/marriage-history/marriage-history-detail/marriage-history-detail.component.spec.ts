import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageHistoryDetailComponent } from './marriage-history-detail.component';

describe('MarriageHistoryDetailComponent', () => {
  let component: MarriageHistoryDetailComponent;
  let fixture: ComponentFixture<MarriageHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarriageHistoryDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarriageHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
