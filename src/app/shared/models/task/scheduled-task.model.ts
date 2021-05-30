export class ScheduledTask {
  public name: string;
  public startTime: number;
  public deadline: number;
  public capacity: number;
  public remainingCapacity: number;

  public constructor(
    name: string,
    startTime: number,
    deadline: number,
    capacity: number
  ) {
    this.name = name;
    this.startTime = startTime;
    this.deadline = deadline;
    this.capacity = capacity;
    this.remainingCapacity = capacity;
  }

  public isCompleted(): boolean {
    return this.remainingCapacity === 0;
  }

  public run(): this {
    this.remainingCapacity--;
    return this;
  }
}
