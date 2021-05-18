import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlgorithimsRoutingModule } from './algorithims-routing.module';
import { RateMonotonicComponent } from './rate-monotonic/rate-monotonic.component';
import { HomeComponent } from './home/home.component';
import { EarliestDeadlineFirstComponent } from './earliest-deadline-first/earliest-deadline-first.component';

@NgModule({
  imports: [CommonModule, AlgorithimsRoutingModule],
  declarations: [RateMonotonicComponent, HomeComponent, EarliestDeadlineFirstComponent],
})
export class AlgorithimsModule {}
