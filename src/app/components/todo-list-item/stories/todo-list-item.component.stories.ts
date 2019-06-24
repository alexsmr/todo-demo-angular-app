import {moduleMetadata, storiesOf} from '@storybook/angular';
import {text, boolean, withKnobs} from '@storybook/addon-knobs';
import {centered} from '@storybook/addon-centered/angular';
import {action} from '@storybook/addon-actions';
import {TodoListItemComponent} from '../todo-list-item.component';
import {CommonModule} from '@angular/common';

storiesOf('Components', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addDecorator(moduleMetadata({
    imports: [CommonModule],
    declarations: [TodoListItemComponent]
  }))
  .add('TODO List Item', () => ({
    template:
      `<app-todo-list-item
        [todo]="todo"
        (toggleComplete)="toggleComplete"
      ></app-todo-list-item>`,
    props: {
      todo: {
        title: text('Title', 'Make restaurant reservation'),
        complete: boolean('Complete', true),
        id: 3
      },
      toggleComplete: action('complete was toggled')
    },
  }));
