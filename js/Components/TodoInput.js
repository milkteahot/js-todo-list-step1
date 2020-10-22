class TodoInput {
  constructor($target, eventHelper) {
    this.$target = $target;
    this.initEventListeners();
    this.eventHelper = eventHelper;
  }

  initEventListeners() {
    const ENTER = "Enter";
    const handleSubmit = (e) => {
      if(e.key !== ENTER){
        return;
      }
      const contents = this.$target.value;
      console.log(e);
      console.log(contents);
      this.eventHelper?.addTodo(contents);
      
    };
    
    this.$target.addEventListener("keyup", handleSubmit);
  }
}

export default TodoInput;
