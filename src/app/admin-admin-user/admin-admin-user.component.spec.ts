import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminUserComponent } from './admin-admin-user.component';

describe('AdminAdminUserComponent', () => {
  let component: AdminAdminUserComponent;
  let fixture: ComponentFixture<AdminAdminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdminUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
