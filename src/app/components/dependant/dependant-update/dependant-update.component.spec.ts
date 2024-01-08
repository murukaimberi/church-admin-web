import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantUpdateComponent } from './dependant-update.component';

describe('DependantUpdateComponent', () => {
  let component: DependantUpdateComponent;
  let fixture: ComponentFixture<DependantUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependantUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
