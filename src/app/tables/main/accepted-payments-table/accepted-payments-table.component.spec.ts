import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedPaymentsTableComponent } from './accepted-payments-table.component';

describe('AcceptedPaymentsTableComponent', () => {
  let component: AcceptedPaymentsTableComponent;
  let fixture: ComponentFixture<AcceptedPaymentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedPaymentsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedPaymentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
