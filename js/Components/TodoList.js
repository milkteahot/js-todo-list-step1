class TodoList {
    constructor($target){
        this.$target = $target;
    }

    render() {
        this.$target.innerHTML = `
        <ul>
        </ul>
        `
    }
}

export default TodoList;