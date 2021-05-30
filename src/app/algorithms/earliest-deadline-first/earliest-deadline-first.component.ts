import { Component, OnInit } from '@angular/core';
import { Result, Task } from 'src/app/shared/models';
import { EarliestDeadlineFirstTaskSet } from 'src/app/shared/models/task/algorithms';

@Component({
  selector: 'app-earliest-deadline-first',
  templateUrl: './earliest-deadline-first.component.html',
  styleUrls: ['./earliest-deadline-first.component.scss'],
})
export class EarliestDeadlineFirstComponent implements OnInit {
  public instance!: EarliestDeadlineFirstTaskSet;
  public result: Result[] = [];
  constructor() {}

  ngOnInit(): void {}

  public schedule(tasks: Task[]): void {
    this.result = [];
    this.instance = new EarliestDeadlineFirstTaskSet(tasks).calculate();
    console.log(this.instance);
    for (let index = 0; index < this.instance.lcm; index++) {
      const current = this.instance.getNextTask(index);
      this.result.push({
        time: index,
        runningTaskName: current?.name,
        color: current?.color,
      });
    }
  }
}
