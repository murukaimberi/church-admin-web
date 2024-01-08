import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptsimDeleteComponent } from './baptsim-delete.component';

describe('BaptsimDeleteComponent', () => {
  let component: BaptsimDeleteComponent;
  let fixture: ComponentFixture<BaptsimDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaptsimDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaptsimDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
