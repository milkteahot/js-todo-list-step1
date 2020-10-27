const todoInput = document.getElementById('new-todo-title');
const todoList = document.getElementById('todo-list')

function handleSubmit(event) {
    // event.preventDefault();
    const currentValue = todoInput.value;
    console.log(currentValue);

    addTodo(currentValue);
    todoInput.value = "";
}

function addTodo(text){
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    checkbox.type = "checkbox";
    checkbox.checked = false;
    checkbox.id = "checkbox";
    checkbox.addEventListener("click", event => this.check(event))
    span.innerText = text;
    deleteBtn.innerText = "x";
    deleteBtn.addEventListener("click", deleteTodo);

    li.appendChild(checkbox);
    li.appendChild(deleteBtn);
    li.appendChild(span);
    todoList.appendChild(li);
}

function deleteTodo(event){
    // console.dir(event.target);
    const btn = event.target;
    const item = btn.parentNode;
    todoList.removeChild(item);
}

function check(event){
    const checked = event.target.checked;
    checked ? "true" : "false";

    // const completed = document.querySelector('li').class
    
}