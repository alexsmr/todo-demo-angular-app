# TODO List App

This renders a todo list app component
## Example Usage

```javascript
<app-root-ui
        [todos]="todos"
        (onAddTodo)="onAddTodo($event)"
        (onRemoveTodo)="onRemoveTodo($event)"
        (onToggleTodoComplete)="onToggleTodoComplete($event)"
      ></app-root-ui>
```

## Props

    ### `todos`: `Array`
    List of todo objects
    ### `onAddTodo`: `action`
    Action to be taken upon adding a todo list item
    ### `onRemoveTodo`: `action`
    Action to be taken upon removing a todo list item
    ### `onToggleTodoComplete`: `action`
    Action to be taken upon toggling complete a todo list item