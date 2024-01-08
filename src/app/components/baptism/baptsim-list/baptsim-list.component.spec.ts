import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptsimListComponent } from './baptsim-list.component';

describe('BaptsimListComponent', () => {
  let component: BaptsimListComponent;
  let fixture: ComponentFixture<BaptsimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaptsimListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaptsimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
