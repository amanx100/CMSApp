import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddProComponent } from './user-add-pro.component';

describe('UserAddProComponent', () => {
  let component: UserAddProComponent;
  let fixture: ComponentFixture<UserAddProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
