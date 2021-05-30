import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models';
import { EarliestDeadlineFirstTaskSet } from 'src/app/shared/models/task/algorithms';

@Component({
  selector: 'app-earliest-deadline-first',
  templateUrl: './earliest-deadline-first.component.html',
  styleUrls: ['./earliest-deadline-first.component.scss'],
})
export class EarliestDeadlineFirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public schedule(tasks: Task[]): void {
    const result = new EarliestDeadlineFirstTaskSet(tasks).calculate();
    console.log(result);
    for (let index = 0; index < result.lcm; index++) {
      console.log(index, result.getNextTask(index));
    }
  }
}
