import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlgorithmsRoutingModule } from './algorithms-routing.module';
import { RateMonotonicComponent } from './rate-monotonic/rate-monotonic.component';
import { HomeComponent } from './home/home.component';
import { EarliestDeadlineFirstComponent } from './earliest-deadline-first/earliest-deadline-first.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskViewComponent } from './tasks/task-view/task-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AlgorithmsRoutingModule, FormsModule],
  declarations: [
    RateMonotonicComponent,
    HomeComponent,
    EarliestDeadlineFirstComponent,
    TasksComponent,
    TaskViewComponent,
  ],
})
export class AlgorithmsModule {}
