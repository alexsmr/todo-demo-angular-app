# TODO List

This renders a todo list component
## Example Usage

```javascript
<app-todo-list
        [todos]="todos"
        (toggleComplete)="toggleComplete($event)"
        (remove)="remove($event)"
      ></app-todo-list>
```

## Props

    ### `todos`: `Array`
    List of todo objects
    ### `toggleComplete`: `action`
    Action to be taken upon toggling a todo list item
    ### `remove`: `action`
    Action to be taken upon removing a todo list item