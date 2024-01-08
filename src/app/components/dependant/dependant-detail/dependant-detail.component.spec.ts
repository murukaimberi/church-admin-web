import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantDetailComponent } from './dependant-detail.component';

describe('DependantDetailComponent', () => {
  let component: DependantDetailComponent;
  let fixture: ComponentFixture<DependantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependantDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
