export class TodoContext {
    constructor() {
      this.todos = []; // This will hold our todo list
      this.listeners = []; // Keep track of components that need to re-render when the state changes
    }
  
    // Method to add a todo
    addTodo(task) {
      const newTodo = {
        id: Date.now(), // Generate a unique id
        task,
        completed: false,
      };
      this.todos.push(newTodo);
      this.notifyListeners();
    }
  
    // Method to toggle a todo's completion status
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.notifyListeners();
      }
    }
  
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.notifyListeners();
    }
  
    // Method to subscribe components to the state
    subscribe(listener) {
      this.listeners.push(listener);
    }
  
    // Notify listeners when state changes
    notifyListeners() {
      this.listeners.forEach(listener => listener());
    }
  
    // Get the current todos
    getTodos() {
      return this.todos;
    }
  }
  