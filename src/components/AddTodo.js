import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  render() {
    const addElement = document.createElement('div');
    addElement.className = "add-todo";
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    addElement.querySelector('#todo-add-btn').addEventListener('click', () => {
      const input = addElement.querySelector('#todo-input');
      if (input.value.trim()) {
        this.props.onAdd(input.value); // Call the onAdd function passed as prop
        input.value = ''; // Clear the input field
      }
    });

    return addElement;
  }
}
