import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {centered} from '@storybook/addon-centered/angular';
import {TodoListFooterComponent} from '../todo-list-footer.component';
import {CommonModule} from '@angular/common';

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
    declarations: [TodoListFooterComponent]
  }))
  .add('TODO List Footer', () => ({
    template:
      `<app-todo-list-footer
        [todos]="todos"
      ></app-todo-list-footer>`,
    props: {
      todos: TODOS
    },
  }));
