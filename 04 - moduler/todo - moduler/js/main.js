import { getAllTodos, postTodo, patchTodo, deleteTodo } from "./firebasefunctions.js";

const todoContainer = document.querySelector('#todo-container');

getAllTodos().then( displayTodos );

function displayTodos(todosObj){
    // console.log(todosObj);
    todoContainer.innerHTML = '';
    
    for(const todoID in todosObj){
        // console.log(todoID, todosObj[todoID]);
        const todo = todosObj[todoID];
        // console.log(todo.done);

        const container = document.createElement('div');
        container.classList.add('todo');
        todoContainer.append(container);

        const p = document.createElement('p');
        p.innerText = todo.task;
        p.id = todoID;
        p.done = todo.done;
        p.setAttribute('done', todo.done);
        container.append(p);

        if(todo.done){
            p.classList.add('done');

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'X';
            deleteBtn.id = todoID;
            container.append(deleteBtn);
        }

        
    }
}



// Post a new todo
const form = document.querySelector('form');
form.addEventListener('submit', event=>{
    event.preventDefault();
    const input = document.querySelector('input');

    const newTodo = {
        task: input.value,
        done: false
    }
    postTodo(newTodo)
        .then( getAllTodos )
        .then( displayTodos );
    // console.log(newTodo);
})



// 
todoContainer.addEventListener('click', event=>{
    // console.log(event.target.id, event.target.done);
    console.log(event.target);

    if(event.target.tagName == 'P'){
        patchTodo(event.target.id, event.target.done)
            .then(getAllTodos)
            .then(displayTodos);
    }
    else if( event.target.tagName == 'BUTTON'){
        // console.log('BUTTON')
        deleteTodo(event.target.id)
            .then(getAllTodos)
            .then(displayTodos);
    }

})