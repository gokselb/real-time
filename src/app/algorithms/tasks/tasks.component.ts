import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public currentTasks: Task[] = [];
  @Output() public scheduleClicked: EventEmitter<Task[]> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.createTasks();
  }

  private createTasks(): void {
    this.currentTasks = [
      new Task('Task 1', 1, 8),
      new Task('Task 2', 2, 5),
      new Task('Task 3', 4, 10),
    ];
  }

  public removeTask(task: Task): void {
    const index = this.currentTasks.indexOf(task);
    this.currentTasks.splice(index, 1);
  }

  public addNewTask(): void {
    this.currentTasks.push(new Task('Task', 0, 0));
  }
}
