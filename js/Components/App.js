import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";

class App {
  todos = []; //멤버변수 의미.

  constructor($target) {
    this.$target = $target;
    this.render();
    this.initComponents();
  }

  createTodo(contents) {
    return {
      _id: Date.now().toString() + Math.floor(Math.random() * 1000),
      contents,
      isCompleted: false,
    };
  }

  addTodo = (contents) => {
    const newTodo = this.createTodo(contents);
    this.todos = [...this.todos, newTodo];
    this.todoList.setState({ todos: this.todos });
  };

  render() {
    this.$target.innerHTML = `
        <h1>TODOS</h1>
        <main>
            <input
                id="new-todo-title"
                class="new-todo"
                placeholder="할일을 추가해주세요"
                autofocus
            />
            <ul id="todo-list" class="todo-list"></ul>
            <div class="count-container"></div>
        </main>
    `;
  }

  initComponents() {
    this.todoInput = new TodoInput(
      this.$target.querySelector("#new-todo-title"),
      { addTodo: (contents) => this.addTodo(contents) }
    );
    this.todoList = new TodoList(this.$target.querySelector("#todo-list"), {
      todos: this.todos,
    });
  }
}

export default App;
