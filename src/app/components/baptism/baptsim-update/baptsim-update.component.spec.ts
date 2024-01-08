import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptsimUpdateComponent } from './baptsim-update.component';

describe('BaptsimUpdateComponent', () => {
  let component: BaptsimUpdateComponent;
  let fixture: ComponentFixture<BaptsimUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaptsimUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaptsimUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
