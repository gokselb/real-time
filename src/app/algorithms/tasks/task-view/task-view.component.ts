import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared/models';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() removeClicked: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
