// export {getAllTodos, postTodo, patchTodo, deleteTodo};

const baseUrl = 'https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/todo-list';

export async function getAllTodos(){
    const url = baseUrl + '.json';

    const response = await fetch(url);
    const todos = await response.json();

    // console.log(todos);
    return todos;
}

export async function postTodo(newTodo){
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
    console.log(data);
}

export async function patchTodo(id, done){
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

export async function deleteTodo(id){
    const url = baseUrl + '/' + id + '.json';

    const response = await fetch(url, {method: 'DELETE'});
    const data = await response.json();
    console.log(data);
}