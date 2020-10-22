class TodoInput {
  constructor($target, addTodo) {
    this.$target = $target;
  }

  handleSubmit = (e) => {
    const item = this.$target.value;
    addTodo(item)
  }

}

export default TodoInput;
