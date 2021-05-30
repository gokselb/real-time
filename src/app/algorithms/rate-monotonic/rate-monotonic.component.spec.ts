import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateMonotonicComponent } from './rate-monotonic.component';

describe('RateMonotonicComponent', () => {
  let component: RateMonotonicComponent;
  let fixture: ComponentFixture<RateMonotonicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateMonotonicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateMonotonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
