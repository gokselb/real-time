import { Component, OnInit } from '@angular/core';
import { RateMonotonicTaskSet, Result, Task } from 'src/app/shared/models';

@Component({
  selector: 'app-rate-monotonic',
  templateUrl: './rate-monotonic.component.html',
  styleUrls: ['./rate-monotonic.component.scss'],
})
export class RateMonotonicComponent implements OnInit {
  public instance!: RateMonotonicTaskSet;
  public result: Result[] = [];
  constructor() {}

  ngOnInit(): void {}

  public schedule(tasks: Task[]): void {
    this.result = [];
    this.instance = new RateMonotonicTaskSet(tasks).calculate();
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
