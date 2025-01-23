import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.todo = props.todo;
    this.onToggle = props.onToggle;
    this.onDelete = props.onDelete;
  }

  render() {
    const todoElement = document.createElement('li');
    todoElement.className = `todo-item ${this.todo.completed ? 'completed' : 'not-completed'}`;

    todoElement.innerHTML = `
      <span>${this.todo.task}</span>
      <button class="toggle-btn">${this.todo.completed ? 'Mark Not Completed' : 'Mark Completed'}</button>
      <button class="delete-btn">Delete</button>
    `;

    todoElement.querySelector('.toggle-btn').addEventListener('click', () => {
      this.onToggle(this.todo.id);
    });

    todoElement.querySelector('.delete-btn').addEventListener('click', () => {
      this.onDelete(this.todo.id);
    });

    return todoElement;
  }
}
