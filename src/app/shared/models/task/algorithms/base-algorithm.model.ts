import { UtilsService } from 'src/app/shared/services/utils.service';
import { Task } from '../task.model';

export class BaseAlgorithm {
  public lcm!: number;
  public utilization!: number;
  public usedTimeSlots!: number;
  public taskList: Task[];
  public constructor(taskList: Task[]) {
    this.taskList = taskList;
    this.findLcm();
    this.findUtilization();
    this.taskList.forEach((task) => {
      task.scheduleTasks(this.lcm);
    });
  }

  // tslint:disable-next-line: typedef
  public registerNewTask(task: Task) {
    this.taskList.push(task);
    return this;
  }

  // tslint:disable-next-line: typedef
  public findUtilization() {
    const utilization = this.taskList
      .map((task) => task.capacity / task.period)
      .reduce((a, b) => a + b, 0);
    this.usedTimeSlots = (utilization * this.lcm);
    this.utilization = utilization * 100;
    return this;
  }

  // tslint:disable-next-line: typedef
  public findLcm() {
    this.lcm = UtilsService.findLCM(this.taskList.map((task) => task.period));
    return this;
  }
}
