import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipWeekComponent } from './skip-week.component';

describe('SkipWeekComponent', () => {
  let component: SkipWeekComponent;
  let fixture: ComponentFixture<SkipWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
