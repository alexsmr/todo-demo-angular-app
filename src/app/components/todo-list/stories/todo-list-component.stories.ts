import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {centered} from '@storybook/addon-centered/angular';
import {action} from '@storybook/addon-actions';
import {TodoListComponent} from '../todo-list.component';
import {CommonModule} from '@angular/common';
import {TodoListItemComponent} from "../../todo-list-item/todo-list-item.component";
import ReadMe from '../README.md';

const TODOS = [
  {
    title: 'Clean inbox',
    complete: true,
    id: 2
  },
  {
    title: 'Make restaurant reservation',
    complete: true,
    id: 3
  },
  {
    title: 'q',
    complete: false,
    id: 4
  }
];

storiesOf('Components', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addDecorator(moduleMetadata({
    imports: [CommonModule],
    declarations: [TodoListComponent, TodoListItemComponent]
  }))
  .add('TODO List', () => ({
    template:
      `<app-todo-list
        [todos]="todos"
        (toggleComplete)="toggleComplete($event)"
        (remove)="remove($event)"
      ></app-todo-list>`,
    props: {
      todos: TODOS,
      toggleComplete: action('Toggle Complete'),
      remove: action('Remove ToDo')
    },
  }),
  {
      notes: ReadMe
  });
