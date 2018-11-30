import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerplanweekComponent } from './customerplanweek.component';

describe('CustomerplanweekComponent', () => {
  let component: CustomerplanweekComponent;
  let fixture: ComponentFixture<CustomerplanweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerplanweekComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerplanweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
