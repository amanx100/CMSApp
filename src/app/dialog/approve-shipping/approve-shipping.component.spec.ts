import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveShippingComponent } from './approve-shipping.component';

describe('ApproveShippingComponent', () => {
  let component: ApproveShippingComponent;
  let fixture: ComponentFixture<ApproveShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
