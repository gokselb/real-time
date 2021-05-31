import { ScheduledTask } from './scheduled-task.model';

export class Task {
  public name: string;
  public capacity: number;
  public period: number;
  public deadline: number;
  public scheduledTasks: ScheduledTask[];
  public color!: string;
  public constructor(
    name: string,
    capacity: number,
    period: number,
    deadline?: number
  ) {
    this.name = name;
    this.capacity = capacity;
    this.period = period;
    this.deadline = deadline || deadline === 0 ? deadline : this.period;
    this.scheduledTasks = [];
  }

  public scheduleTasks(lcm: number): Task {
    const instances = lcm / this.period;
    for (let index = 0; index < instances; index++) {
      this.scheduledTasks.push(
        new ScheduledTask(
          this.name,
          this.period,
          index * this.period,
          index * this.period + this.deadline,
          this.capacity,
          this.color
        )
      );
    }
    return this;
  }

  public isAllCompleted(): boolean {
    return this.scheduledTasks.every((task) => task.isCompleted() === true);
  }
}
