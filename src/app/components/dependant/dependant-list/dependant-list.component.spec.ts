import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantListComponent } from './dependant-list.component';

describe('DependantListComponent', () => {
  let component: DependantListComponent;
  let fixture: ComponentFixture<DependantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependantListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
