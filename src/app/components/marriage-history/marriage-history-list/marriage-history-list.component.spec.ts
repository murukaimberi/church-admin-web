import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageHistoryListComponent } from './marriage-history-list.component';

describe('MarriageHistoryListComponent', () => {
  let component: MarriageHistoryListComponent;
  let fixture: ComponentFixture<MarriageHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarriageHistoryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarriageHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
