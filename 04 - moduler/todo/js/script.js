/** GLOBAL VARIABLES */
const baseUrl = 'https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/todo-list';
const todoContainer = document.querySelector('#todo-container');

/** FIREBASE REQUESTS - async functions for sending requests to firebase */
async function getAllTodos(){
    const url = baseUrl + '.json';

    const response = await fetch(url);
    const todos = await response.json();

    // console.log(todos);
    return todos;
}

async function postTodo(newTodo){
    const url = baseUrl + '.json';

    const options = {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
}

async function patchTodo(id, done){
    const url = baseUrl + '/' + id + '.json';
    // console.log(url);

    const options = {
        method: 'PATCH',
        body: JSON.stringify({ done: !done} ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
}

async function deleteTodo(id){
    const url = baseUrl + '/' + id + '.json';

    const response = await fetch(url, {method: 'DELETE'});
    const data = await response.json();
    console.log(data);
}


/** DISPLAY TODOS - creates a p element for each todo and adds a delete button if the task is done*/
function displayTodos(todosObj){
    // console.log(todosObj);
    todoContainer.innerHTML = '';
    
    for(const todoID in todosObj){
        // console.log(todoID, todosObj[todoID]);
        const todo = todosObj[todoID];
        // console.log(todo.done);

        // Container for each todo
        const container = document.createElement('div');
        container.classList.add('todo');
        todoContainer.append(container);

        // P element for each todo
        const p = document.createElement('p');
        p.innerText = todo.task;
        p.id = todoID;
        p.setAttribute('done', todo.done); //Adds a custom attribute 
        container.append(p);

        // If the task is done, add styling and a delete button
        if(todo.done){
            p.classList.add('done');

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'X';
            deleteBtn.id = todoID;
            container.append(deleteBtn);
        }
    }
}



/**FORM HANDLER - adds a new todo */
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

/**CLICK HANDLER -  updates / deletes a todo*/
todoContainer.addEventListener('click', event=>{
    // console.log(event.target.id, event.target.done);
    console.log(event.target);

    //Click on p element updates the done property
    if(event.target.tagName == 'P'){
        patchTodo(event.target.id, event.target.done)
            .then(getAllTodos)
            .then(displayTodos);
    }
    // Click on button deletes the todo object from firebase
    else if( event.target.tagName == 'BUTTON'){
        // console.log('BUTTON')
        deleteTodo(event.target.id)
            .then(getAllTodos)
            .then(displayTodos);
    }
})