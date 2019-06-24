import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {centered} from '@storybook/addon-centered/angular';
import {action} from '@storybook/addon-actions';
import {AppUiComponent} from '../ui/app-ui.component';
import {CommonModule} from '@angular/common';
import {TodoListItemComponent} from '../../todo-list-item/todo-list-item.component';
import {TodoListHeaderComponent} from '../../todo-list-header/todo-list-header.component';
import {TodoListFooterComponent} from '../../todo-list-footer/todo-list-footer.component';
import {TodoListComponent} from '../../todo-list/todo-list.component';

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
    declarations: [
      AppUiComponent,
      TodoListComponent,
      TodoListItemComponent,
      TodoListHeaderComponent,
      TodoListFooterComponent
    ]
  }))
  .add('TODO List App', () => ({
    template:
      `<app-root-ui
        [todos]="todos"
        (onAddTodo)="onAddTodo"
        (onRemoveTodo)="onRemoveTodo"
        (onToggleTodoComplete)="onToggleTodoComplete"
      ></app-root-ui>`,
    props: {
      todos: TODOS,
      onAddTodo: action('Add new ToDo'),
      onRemoveTodo: action('Remove ToDo'),
      onToggleTodoComplete: action('Toggle ToDo')
    },
  }));
