import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../../models/todo';

@Component({
  selector: 'app-root-ui',
  templateUrl: './app-ui.component.html',
  styleUrls: ['./app-ui.component.scss']
})
export class AppUiComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleTodoComplete: EventEmitter<Todo> = new EventEmitter();
  @Output() onRemoveTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
