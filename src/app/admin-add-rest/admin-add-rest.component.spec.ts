import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddRestComponent } from './admin-add-rest.component';

describe('AdminAddRestComponent', () => {
  let component: AdminAddRestComponent;
  let fixture: ComponentFixture<AdminAddRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddRestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
