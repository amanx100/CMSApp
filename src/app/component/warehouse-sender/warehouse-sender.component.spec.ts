import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseSenderComponent } from './warehouse-sender.component';

describe('WarehouseSenderComponent', () => {
  let component: WarehouseSenderComponent;
  let fixture: ComponentFixture<WarehouseSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
