class TodoList {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.render();
  }

  setState(state) {
    this.state = { ...this.state, ...state };
    this.render();
  }

  render() {
    const todoHTML = this.state.todos
      .map(
        ({ _id, isComplelted, contents }) =>
          `<li data-id=${_id} class="todo-list"> ${contents}</li>`
      )
      .join("");
    this.$target.innerHTML = todoHTML;
  }
}

export default TodoList;
