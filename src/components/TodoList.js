import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.todos = props.todos || [];
    this.onToggle = props.onToggle || (() => {});
    this.onDelete = props.onDelete || (() => {});
  }

  render() {
    const todoListElement = document.createElement('ul');
    todoListElement.className = "todo-list";

    this.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        onToggle: this.onToggle,
        onDelete: this.onDelete,
      }).render();

      todoListElement.appendChild(todoItem);
    });

    return todoListElement;
  }
}
