import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSubmiteProductComponent } from './approve-submite-product.component';

describe('ApproveSubmiteProductComponent', () => {
  let component: ApproveSubmiteProductComponent;
  let fixture: ComponentFixture<ApproveSubmiteProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveSubmiteProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSubmiteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
