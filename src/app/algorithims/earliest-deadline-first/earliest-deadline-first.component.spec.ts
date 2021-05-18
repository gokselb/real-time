import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarliestDeadlineFirstComponent } from './earliest-deadline-first.component';

describe('EarliestDeadlineFirstComponent', () => {
  let component: EarliestDeadlineFirstComponent;
  let fixture: ComponentFixture<EarliestDeadlineFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarliestDeadlineFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarliestDeadlineFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
