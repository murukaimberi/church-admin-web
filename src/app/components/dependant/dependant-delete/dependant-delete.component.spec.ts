import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantDeleteComponent } from './dependant-delete.component';

describe('DependantDeleteComponent', () => {
  let component: DependantDeleteComponent;
  let fixture: ComponentFixture<DependantDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependantDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependantDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
