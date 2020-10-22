import TodoInput from "./TodoInput.js";

class App {
  todoList = []; //멤버변수 의미.

  constructor($target) {
    this.$target = $target;
    console.log(this.$target);
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
    this.todoList = [...this.todoList, newTodo];
    console.log(this.todoList);
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
  }
}

export default App;
