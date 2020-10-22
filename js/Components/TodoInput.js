class TodoInput {
  constructor($target, eventHelper) {
    this.$target = $target;
    this.initEventListeners();
    this.eventHelper = eventHelper;
  }

  initEventListeners() {
    const handleSubmit = (e) => {
      const contents = this.$target.value;
      console.log(e);
      console.log(contents);
      this.eventHelper?.addTodo(contents);
    };
    this.$target.addEventListener("keyup", handleSubmit);
  }
}

export default TodoInput;
