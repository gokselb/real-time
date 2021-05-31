import { ScheduledTask } from '../scheduled-task.model';
import { Task } from '../task.model';
import { BaseAlgorithm } from './base-algorithm.model';

export class RateMonotonicTaskSet extends BaseAlgorithm {
  public constructor(taskList: Task[]) {
    super(taskList);
  }

  public calculate(): RateMonotonicTaskSet {
    this.findLcm();
    return this;
  }

  public getNextTask(currentTime: number): ScheduledTask | undefined {
    const tasks = this.taskList.filter((task) => !task.isAllCompleted());
    if (tasks.length === 0) {
      return undefined;
    }
    if (
      tasks.filter((task) =>
        task.scheduledTasks.some(
          (scheduledTask) =>
            !scheduledTask.isCompleted() &&
            scheduledTask.startTime <= currentTime
        )
      ).length === 0
    ) {
      return undefined;
    }
    const scheduled = tasks
      .filter((task) => !task.isAllCompleted())
      .map((task) => task.scheduledTasks)
      .flat()
      .filter((task) => !task.isCompleted())
      .filter((task) => task.startTime <= currentTime)
      .sort((a, b) =>
        a.period === b.period
          ? a.startTime - b.startTime
          : a.period - b.period
      );

    return scheduled[0].run();
  }
}
