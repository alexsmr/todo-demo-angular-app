# TODO List Item

This renders a todo list item component with toggle completion action

## Example Usage

```javascript
<app-todo-list-item
    [todo]="todo"
    (toggleComplete)="toggleComplete($event)"
></app-todo-list-item>
```

## Props

    ### `toggleComplete`: `action`
    Action that should be taken upon toggleing the list item
    ### `todo`: `object`
    The todo list object that defines the list item. Contains title (String), complete (boolean), and id (Integer) properties