import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedPaymentsTableComponent } from './expected-payments-table.component';

describe('ExpectedPaymentsTableComponent', () => {
  let component: ExpectedPaymentsTableComponent;
  let fixture: ComponentFixture<ExpectedPaymentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedPaymentsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectedPaymentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
