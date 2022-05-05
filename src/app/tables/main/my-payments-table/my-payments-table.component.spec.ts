import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaymentsTableComponent } from './my-payments-table.component';

describe('MyPaymentsTableComponent', () => {
  let component: MyPaymentsTableComponent;
  let fixture: ComponentFixture<MyPaymentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPaymentsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPaymentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
