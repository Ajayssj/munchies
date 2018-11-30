import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerplanComponent } from './customerplan.component';

describe('CustomerplanComponent', () => {
  let component: CustomerplanComponent;
  let fixture: ComponentFixture<CustomerplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerplanComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
