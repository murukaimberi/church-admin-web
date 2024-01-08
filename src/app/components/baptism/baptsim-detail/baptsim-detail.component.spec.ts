import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptsimDetailComponent } from './baptsim-detail.component';

describe('BaptsimDetailComponent', () => {
  let component: BaptsimDetailComponent;
  let fixture: ComponentFixture<BaptsimDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaptsimDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaptsimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
