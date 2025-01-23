import { Component } from "../common/Component.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";

export class App extends Component {
  constructor() {
    super();
    this.todos = []; // Store todos
  }

  // Add Todo
  addTodo(task) {
    const newTodo = { id: Date.now(), task, completed: false };
    this.todos.push(newTodo);
    this.renderTodos(); // Re-render the list
  }

  // Toggle Todo completion
  toggleTodo(id) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }; // Toggle completed
      }
      return todo;
    });
    this.renderTodos(); // Re-render the list
  }

  // Delete Todo
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.renderTodos(); // Re-render the list
  }

  // Render Todos
  renderTodos() {
    const todos = new TodoList({
      todos: this.todos,
      onToggle: this.toggleTodo.bind(this),
      onDelete: this.deleteTodo.bind(this),
    }).render();

    this.container.querySelector('#wrapper-todos').innerHTML = ''; // Clear existing todos
    this.container.querySelector('#wrapper-todos').appendChild(todos);
  }

  render() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
      <h1>My To Dos</h1>
      <div id="wrapper-add"></div>
      <div id="wrapper-todos"></div>
    `;

    const add = new AddTodo({
      onAdd: this.addTodo.bind(this),
    }).render();

    this.container = container; 
    container.querySelector('#wrapper-add').appendChild(add);

    return container;
  }
}
