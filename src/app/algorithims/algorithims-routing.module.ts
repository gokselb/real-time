import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarliestDeadlineFirstComponent } from './earliest-deadline-first/earliest-deadline-first.component';

import { HomeComponent } from './home/home.component';
import { RateMonotonicComponent } from './rate-monotonic/rate-monotonic.component';

const routes: Routes = [
  { path: 'rate-monotonic', component: RateMonotonicComponent },
  {
    path: 'earliest-deadline-first',
    component: EarliestDeadlineFirstComponent,
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AlgorithimsRoutingModule {}
