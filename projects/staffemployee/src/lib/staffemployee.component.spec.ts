import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffemployeeComponent } from './staffemployee.component';

describe('StaffemployeeComponent', () => {
  let component: StaffemployeeComponent;
  let fixture: ComponentFixture<StaffemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
