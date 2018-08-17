import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProDailogComponent } from './add-pro-dailog.component';

describe('AddProDailogComponent', () => {
  let component: AddProDailogComponent;
  let fixture: ComponentFixture<AddProDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
