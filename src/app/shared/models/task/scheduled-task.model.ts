export class ScheduledTask {
  public name: string;
  public period: number;
  public startTime: number;
  public deadline: number;
  public capacity: number;
  public remainingCapacity: number;
  public color: string;

  public constructor(
    name: string,
    period: number,
    startTime: number,
    deadline: number,
    capacity: number,
    color: string
  ) {
    this.name = name;
    this.period = period;
    this.startTime = startTime;
    this.deadline = deadline;
    this.capacity = capacity;
    this.remainingCapacity = capacity;
    this.color = color;
  }

  public isCompleted(): boolean {
    return this.remainingCapacity === 0;
  }

  public run(): this {
    this.remainingCapacity--;
    return this;
  }
}
