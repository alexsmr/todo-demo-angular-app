import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {centered} from '@storybook/addon-centered/angular';
import {TodoListHeaderComponent} from '../todo-list-header.component';
import {CommonModule} from '@angular/common';
import {action} from '@storybook/addon-actions';
import ReadMe from '../README.md';

storiesOf('Components', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addDecorator(moduleMetadata({
    imports: [CommonModule],
    declarations: [TodoListHeaderComponent]
  }))
  .add('TODO List Header', () => ({
    template:
      `<app-todo-list-header
        (add)="add($event)"
      ></app-todo-list-header>`,
    props: {
      add: action('Add new TODO')
    },
  }),
  {
      notes: ReadMe
  });
