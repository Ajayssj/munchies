import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMailchimpComponent } from './thank-you-mailchimp.component';

describe('ThankYouMailchimpComponent', () => {
  let component: ThankYouMailchimpComponent;
  let fixture: ComponentFixture<ThankYouMailchimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouMailchimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMailchimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
