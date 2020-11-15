// Selectors
const todoInput = document.querySelector('.todo-text');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();

    // Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Completed or checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);

    // Clear input value
    todoInput.value=""; 
}

function deleteCheck(e){
    const item = e.target;

    // Delete todo
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.remove();
    }

    // Check todo
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}