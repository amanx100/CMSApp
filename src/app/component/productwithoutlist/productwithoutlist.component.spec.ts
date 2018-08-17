import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductwithoutlistComponent } from './productwithoutlist.component';

describe('ProductwithoutlistComponent', () => {
  let component: ProductwithoutlistComponent;
  let fixture: ComponentFixture<ProductwithoutlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductwithoutlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductwithoutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
